const {
    MessageButton,
    Client,
    Message,
    Interaction
} = require('discord.js');

/*BUTTON PAGINATION*/

/**
 * 
 * @param {Client} client - Your Client
 * @param {Message} message  - The message
 * @param {Array} embeds  - Array of embeds
 * @returns Button Pagination
 */

const button_pagination = async (client, message, embeds) => {
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

    /**
     * @param {Interaction} interaction
     */
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isButton()) return;
        if (interaction.user.bot) return;

        const filter = i => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            time: 15000
        });

        collector.on('collect', async i => {
            if (i.customId == `-1${message.author.id}`) {

                index = index > 0 ? --index : embeds.length - 1;

                await i.update({
                    embeds: [embeds[index]]
                });

            } else if (i.customId == `-2${message.author.id}`) {


                index = index + 1 < embeds.length ? ++index : 0;

                await i.update({
                    embeds: [embeds[index]]
                });
            }
        });

        collector.on('end', collected => {
            button.setDisabled(true)
            button2.setDisabled(true)
        });

    })

    return msg;

}

module.exports = button_pagination;