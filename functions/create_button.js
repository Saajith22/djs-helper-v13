const chalk = require('chalk');
const {
    MessageButton,
    Message,
    Client,
    MessageEmbed
} = require('discord.js');

/* BUTTON CREATOR */
/**
 * @param {Object} options - Options for the button (style, url etc.)
 * @param {String} style - The style for the button
 * @param {String} url - The link for the button (if its a redirecting button!)
 * @param {String} label - The label for the button
 * @param {String} id - The id for the button
 * @returns MessageButton
 */

const create_button = (options) => {
    if (!options) throw new Error(`The options were not provided! ${chalk.red.bold('Error')}`);
    let {
        style,
        url,
        label,
        id
    } = options;
    if (!style || !label) throw new Error(`The options were not provided! ${chalk.red.bold('Error')}`);
    if (url && id) throw new Error(`You can not have both the url and id at the same time!! ${chalk.red.bold('Error')}`);

    let button;

    let styles = ["green", "red", "url", "big", "small"];
    if (!styles.includes(style.toLowerCase())) throw new Error(`Invalid style was provided! Please use one of: (green, red, url, big, small)! ${chalk.red.bold('Error')}`)

    let stole = styleChanger(style.toLowerCase());

    if (id) {
        button = new MessageButton()
            .setCustomId(id)
            .setLabel(label)
            .setStyle(stole)
    } else {
        if (!stole == "LINK") throw new Error(`The style must be url if you are making a url-redirect button! ${chalk.red.bold('Error')}`)
        button = new MessageButton()
            .setCustomId(id)
            .setLabel(label)
            .setStyle(stole)
    }

    return button;
}

/* UTILS */

function styleChanger(style) {

    switch (style) {
        case ('green'):
            style = "SUCCESS"
            break;

        case ('red'):
            style = "DANGER"
            break;

        case ('url'):
            style = "LINK"
            break;

        case ('big'):
            style = "PRIMARY"
            break;

        case ('small'):
            style = "SECONDARY"
            break;
    }

    return style;
}

module.exports = create_button;