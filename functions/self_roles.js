const {
  Message
} = require('discord.js');
const create_menu = require('./create_menu');
const chalk = require('chalk')

/**
 * 
 * @param {Message} message
 * @param {String[]} roles 
 */

const self_roles = async (message, roles) => {
  if (!roles || !message) throw new Error(`${chalk.red.bold('Please provide the required arguments!')}`);
  //if(typeof roles != 'object') throw new Error(chalk.red.bold('Please provide the roles as an array!'));
  if (roles.length > 25) throw new Error(chalk.red.bold('The amount of selections for the menu should be lesser than or equal to 25!'))

  let arr = [];

  roles.forEach(role => {
    arr.push({
      label: role.charAt(0).toUpperCase() + role.slice(1),
      description: `Gives you the ${role} role!`,
      value: role
    });
  });

  let selectMenu = create_menu({ id: 'Self-roles', placeHolder: 'Select Your Role!', array: arr });

  await message.channel.send({
    content: 'Select your self-role!!',
    components: [selectMenu]
  }).then(msgg => {


    const meenu = async (interaction) => {
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

        await interaction.deferUpdate();

        selectMenu.components[0].setPlaceholder('Select your self-role!!');

        await msgg.edit({
          components: [selectMenu]
        });

        await interaction.followUp({
          content: `${interaction.user} You lost the ${r} role!!`,
          ephemeral: true
        });

        return;
      }

      await interaction.member.roles.add(r);

      selectMenu.components[0].setPlaceholder('Select your self-role!!');


      await interaction.deferUpdate();

      await msgg.edit({
        components: [selectMenu]
      });

      await interaction.followUp({
        content: `${interaction.user} You got the ${r} role!!`,
        ephemeral: true
      });
    };

    const filter = (interaction) => { return !interaction.user.bot };

    const collector = msgg.createMessageComponentCollector({ filter, componentType: "SELECT_MENU" });
    collector.on("collect", meenu);
    collector.on("end", () => null);
  });
}

module.exports = self_roles;