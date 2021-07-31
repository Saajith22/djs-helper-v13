# 💻 djs-helper-v13

djs-helper-v13 is a helper for discord.js v13. It has many useful things, that enhances v13 and makes v13 easier!

<div align="center">
  <p>
    <a href="https://nodei.co/npm/djs-helper-v13
/"><img src="https://nodei.co/npm/djs-helper-v13.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

---

# 📝 Table of contents

-   [Installation](https://www.npmjs.com/package/djs-helper-v13#installation)
-   [Usages](https://www.npmjs.com/package/djs-helper-v13#-usages)
-   [Importing](https://www.npmjs.com/package/djs-helper-v13#-importing)

---

## Installation

First install [Node.js](http://nodejs.org/), then do the following =>

```sh
$ npm install djs-helper-v13
```

## 🛠 Usages

**Tip**: Click them to see more information!

-   [create_button](https://www.npmjs.com/package/djs-helper-v13/#create_button) - Creating MessageButton easily!
-   [button_pagination](https://www.npmjs.com/package/djs-helper-v13/#button_pagination) - Creating Embed Pagination with Buttons easily!
-   [create_menu](https://www.npmjs.com/package/djs-helper-v13/#create_menu) - Creating Select Menus easily!
-   [self_roles](https://www.npmjs.com/package/djs-helper-v13/#self_roles) - Creating Self-Role System with Select Menus easily!
## ✈ Importing

```javascript
// Using Node.js `require()`
const helper = require("djs-helper-v13");

// Using ES6 imports
import helper from "djs-helper-v13";
```

## 🔧 Examples for Usages

### create_button

#### Example :

```js
// requring the file!
const { create_button } = require('djs-helper-v13'); 

// creating the button (with options that we want!)
let thing = create_button({ style: 'green', label: 'CHICKEN', id: 'SED' }); 

return message.channel.send({
      content: 'Testing',
      components: [thing]
}); // sending the button to the channel! And (message) is the current message!
```

#### Preview on the above button :

![preview](https://media.discordapp.net/attachments/803265379484565564/864160182644899841/unknown.png)


### create_menu

#### Example :

```js
		  // requring the function from the package!
		  const { create_menu } = require('djs-helper-v13');
		  
		  // our array with the selections we want for the menu!!
		  
            let array = [{
                  label: 'FIRST',
                  description: 'Hellow World',
                  value: 'First value'
            }, {
                  label: 'Second',
                  description: 'Heylo World!!',
                  value: 'Second value'
            }]; // you can have more than two!
			
			
			// using the package to make it!
            let menu = create_menu({
                  id: 'Menus',
                  placeHolder: 'nothing much',
                  array
            });
	

            return message.channel.send({
                  content: 'Testing',
                  components: [menu]
            }); // sending the menu to the channel! And (message) is the current message!
```

#### Preview on the above menu :

![preview](https://media.discordapp.net/attachments/803265368235835472/864509355865276458/unknown.png)


### button_pagination

#### Example :

```js
// requring the package function!
const { button_pagination } = require('djs-helper-v13'); 

// requring the MessageEmbed!
const { MessageEmbed } = require('discord.js');

//making our embeds

const embed1 = new MessageEmbed()
.setTitle('Hello')
.setDescription('Im the first embed')
.setColor('GREEN');

const embed2 = new MessageEmbed()
.setTitle('Hello')
.setDescription('Im the second embed')
.setColor('RED');

// Listing all the embeds into one array
const listOfEmbeds = [
   embed1,
   embed2
]

// Using the pagination, by handling its promise!
// Passing, the Message and the array of embeds =>

button_pagination(message, listOfEmbeds).then(e => null);
//using `.then()` to resolve promise xD

// Now you have the button pagination

```

#### Preview on the button pagination :

![preview](https://i.imgur.com/V25moSd.gif)

### self_roles

#### Example :

```js
// requring the package function!
const { self_roles } = require('djs-helper-v13'); 

// The array of roles you want in the self_roles (menu), make sure its below 25!

 const arr = [
      "Gaming",
      "Super",
      "Hero",
      "Amazing",
      "Developer"
]

//Resolving the promise and using the self_roles function to make the self-roles menu!
await self_roles(message, arr);

/*Note*/
// The self-role menu system, is completely like an addon, its roles does not have colors, or permissions!

```

#### Preview on the self_roles :

![preview](https://i.imgur.com/qjmcbdy.mp4)


**Thank you for using the package!**