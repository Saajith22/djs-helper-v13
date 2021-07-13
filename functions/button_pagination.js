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
    let button = new MessageButton()
        .setCustomId(`-1${message.author.id}`)
        .setLabel('⏪')
        .setStyle('SUCCESS');

    let button2 = new MessageButton()
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

        if(interaction.user.id !== message.author.id) return interaction.channel.send({ content: "You can not use the button!", ephermal: true })

        if (interaction.customId == `-1${message.author.id}`) {
			
			if(!interaction) return;

            index = index > 0 ? --index : embeds.length - 1;

            await interaction.update({
                embeds: [embeds[index]]
            });

        } else if (interaction.customId == `-2${message.author.id}`) {
			
			if(!interaction) return;

            index = index + 1 < embeds.length ? ++index : 0;

            await interaction.update({
                embeds: [embeds[index]]
            });
        }

        setTimeout(async () => {
			
			if(!interaction) return;

            button.setDisabled(true)
            button2.setDisabled(true)	

            return await interaction.editReply({
                components: [buttons]
            });
        }, 15000)
    })

    return msg;

}

module.exports = button_pagination;