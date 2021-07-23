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

    if (!id || !array) throw new Error(chalk.red.bold('The options were not provided! Make sure you provide all the options!'));
    if(typeof roles != 'object') throw new Error(chalk.red.bold('Please provide the roles as an array!'));
    if (array.length < 0) throw new Error(chalk.red.bold(`The array has to have atleast one thing to select!`));
    let select_menu;

    placeHolder = placeHolder ? placeHolder : 'Nothing Selected';

    array.forEach(item => {
        if (!item.label) throw new Error(chalk.red.bold(`The array must have objects, with the following options: (label, description and value) !!`));
        if (!item.description) throw new Error(chalk.red.bold(`The array must have objects, with the following options: (label, description and value) !!`));
        if (!item.value) throw new Error(chalk.red.bold(`The array must have objects, with the following options: (label, description and value) !!`));
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