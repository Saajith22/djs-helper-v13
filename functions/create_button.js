const chalk = require('chalk');
const {
    MessageButton,
    Message,
    Client,
    MessageEmbed
} = require('discord.js');

/* BUTTON CREATOR */
/**
 * @param {String} style - The style for the button
 * @param {String} url - The link for the button (if its a redirecting button!)
 * @param {String} label - The label for the button
 * @param {String} id - The id for the button
 * @returns MessageButton
 */

const create_button = ({
    style,
    url,
    label,
    id
}) => {
    if (!style || !label) throw new Error(`The options were not provided! ${chalk.red.bold('Error')}`);
    if (url && id) return console.error(`Both the url and id can not be specified at the same time! ${chalk.red.bold('Error')}`)
    let button;

    let styles = ["green", "red", "url", "normal", "grey"];
    if (!styles.includes(style.toLowerCase())) throw new Error(`Invalid style was provided! Please use one of: (green, red, url, normal or grey)! ${chalk.red.bold('Error')}`);
    if (style.toLowerCase() == 'url' && !url) throw new Error(`An url must be provided if the style is set to url! ${chalk.red.bold('Error')}`)
    let stole = styleChanger(style.toLowerCase());

    if (url) {
        if (!url.startsWith('https') || !url.startsWith('http')) return console.error(`An invalid URL was provided! ${chalk.red.bold('Error')}`);
        if (!stole == "LINK") throw new Error(`The style must be url if you are making a url-redirect button! ${chalk.red.bold('Error')}`)
        button = new MessageButton()
            .setLabel(label)
            .setStyle(stole)
            .setURL(url)
    } else {
        button = new MessageButton()
            .setCustomId(id)
            .setLabel(label)
            .setStyle(stole)
    }

    return button
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

        case ('normal'):
            style = "PRIMARY"
            break;

        case ('grey'):
            style = "SECONDARY"
            break;
    }

    return style;
}

module.exports = create_button;