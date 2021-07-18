const {
    MessageButton,
    Client,
    Message,
    Interaction,
    MessageActionRow
} = require('discord.js');
const chalk = require('chalk')

/*BUTTON PAGINATION*/

/**
 * 
 * @param {Client} client - Your Client
 * @param {Message} message  - The message
 * @param {Array} embeds  - Array of embeds
 * @returns Button Pagination
 */

const button_pagination = async (client, message, embeds) => {

    if (!client || !message || !embeds) throw new Error(chalk.red.bold('Please provide all the arguments, and make sure they are valid!'))


    let index = 0;

    let button = new MessageActionRow()
        .addComponents(
            new MessageButton().setCustomId(`-1${message.author.id}`).setLabel('⏪').setStyle('SUCCESS')
        );

    let button2 = new MessageActionRow()
        .addComponents(
            new MessageButton().setCustomId(`-2${message.author.id}`).setLabel('⏩').setStyle('SUCCESS')
        );

    let buttons = [
        button,
        button2
    ]

    let msg = await message.channel.send({
        embeds: [embeds[0]],
        components: buttons
    });

    /**
     * @param {Interaction} interaction
     */
    client.on('interactionCreate', async (interaction) => {
        if (!interaction) return;
        if (interaction.user.bot) return;
        if (!interaction.isButton()) return;

        if (interaction.customId == `-1${message.author.id}`) {

            index = index > 0 ? --index : embeds.length - 1;

            await interaction.update({
                embeds: [embeds[index]]
            });

        } else if (interaction.customId == `-2${message.author.id}`) {

            index = index + 1 < embeds.length ? ++index : 0;

            await interaction.update({
                embeds: [embeds[index]]
            });
        }

        setTimeout(async () => {


            button.components[0].setDisabled(true)
            button2.components[0].setDisabled(true)

            return await interaction.editReply({
                components: [buttons]
            });
        }, 15000)
    })

    return msg;

}

module.exports = button_pagination;