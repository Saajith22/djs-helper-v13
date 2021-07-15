const chalk = require('chalk');
const {
    MessageSelectMenu,
    MessageActionRow
} = require('discord.js');

/* MENU CREATOR */
/**
 * @param {String} id - The id for the select menu
 * @param {String}  placeHolder - The place holder for the select menu 
 * @param {Array} array - The array of options (rows to select) for the select menu
 * @returns MessageSelectMenu
 */

const create_menu = ({
    id,
    placeHolder,
    array
}) => {
    if (!id || !array) throw new Error(`The options were not provided! Make sure you provide all the options! ${red}`);
    if (array.length < 0) throw new Error(`The array has to have atleast one thing to select! ${red}`);
    let select_menu;

    placeHolder = placeHolder ? placeHolder : 'Nothing Selected';

    array.forEach(item => {
        if (!item.label) throw new Error(`The array must have objects, with the following options: (label, description and value) !! ${red}`);
        if (!item.description) throw new Error(`The array must have objects, with the following options: (label, description and value) !! ${red}`);
        if (!item.value) throw new Error(`The array must have objects, with the following options: (label, description and value) !! ${red}`);
    });

    select_menu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId(id)
            .setPlaceholder(placeHolder)
            .addOptions(array)
        );

    return select_menu;
}

module.exports = create_menu;