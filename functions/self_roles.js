const {
    Client,
    Message
} = require('discord.js');
const create_menu = require('./create_menu');
const chalk = require('chalk')

/**
 * 
 * @param {Client} client 
 * @param {Message} message
 * @param {String[]} roles 
 */

const self_roles = async (client, message, roles) => {
    if (!client || !roles || !message) throw new Error(`${chalk.red.bold('Please provide the required arguments!')}`);
    if (roles.length > 25) throw new Error(chalk.red.bold('The amount of selections for the menu should be lesser than or equal to 25!'))

    let arr = [];

    roles.forEach(role => {
        arr.push({
            label: role.charAt(0).toUpperCase() + role.slice(1),
            description: `Gives you the ${role} role!`,
            value: role
        });
    });

    let selectMenu = create_menu(client.user.id, 'Select Your Role!', arr);

    await message.channel.send({
        content: 'Select your self-role!!',
        components: [selectMenu]
    });

    client.on('interactionCreate', async (interaction) => {
        if (!interaction) return;
        if (interaction.user.bot) return;
        if (!interaction.isSelectMenu()) return;
        if (interaction.customId !== client.user.id) return;

        let {
            values
        } = interaction;

        let value = values[0];

        let r = interaction.guild.roles.cache.find(r => r.name.toLowerCase() == value.toLowerCase());

        if (!r) {
            r = await interaction.guild.roles.create({
                name: value
            });
        }

        if (interaction.member.roles.cache.has(r.id)) {

            await interaction.member.roles.remove(r);

            await interaction.update({
                components: [selectMenu]
            });

            await interaction.followUp({
                content: `${interaction.user} You lost the ${r} role!!`,
                ephemeral: true
            });

            return
        }

        await interaction.member.roles.add(r);

        selectMenu[0].setPlaceholder('Select your self-role!!');


        await interaction.update({
            components: [selectMenu]
        });

        await interaction.followUp({
            content: `${interaction.user} You got the ${r} role!!`,
            ephemeral: true
        });

    })
}

module.exports = self_roles;