const {
    MessageButton,
    Client,
    Message
} = require('discord.js');

/*BUTTON PAGINATION*/

/**
 * 
 * @param {Client} client - Your Client
 * @param {Message} message  - The message
 * @param {Array} embeds  - Array of embeds
 * @returns Button Pagination
 */

const button_pagination = async (message, embeds) => {
    const button = new MessageButton()
        .setCustomId(`-1${message.author.id}`)
        .setLabel('⏪')
        .setStyle('SUCCESS');

    const button2 = new MessageButton()
        .setCustomId(`-2${message.author.id}`)
        .setLabel('⏩')
        .setStyle('SUCCESS');

    let buttons = [
        button,
        button2
    ]

    let index = 0;

    let msg = await message.channel.send({
        embeds: [embeds[0]],
        components: [buttons]
    });

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isButton()) return;
        if (interaction.user.bot) return;

        if (interaction.user.id !== message.author.id) return await interaction.defer();


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
    })

    return msg;

}

module.exports = button_pagination;