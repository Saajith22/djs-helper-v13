# 💻 djs-helper-v13

djs-helper-v13 is a helper for discord.js v13. It has many useful things, that enhance v13 and makes v13 easier!

<div align="center">
  <p>
    <a href="https://nodei.co/npm/djs-helper-v13
/"><img src="https://nodei.co/npm/djs-helper-v13.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

---

# 📝 Table of contents

-   [Installation](https://www.npmjs.com/package/djs-helper-v13#installation)
-   [Usages](https://www.npmjs.com/package/djs-helper-v13#-usages-click-on-it-for-more-info-on-how-to-use-it)
-   [Importing](https://www.npmjs.com/package/djs-helper-v13#-importing)

---

## Installation

First install [Node.js](http://nodejs.org/), then:

```sh
$ npm install djs-helper-v13
```

## 🛠 Usages

**Tip**: Click the them to see more information!

-   [create_button](https://www.npmjs.com/package/djs-helper-v13/#create_button) - Creating MessageButton easily!
-   [button_pagination](https://www.npmjs.com/package/djs-helper-v13/#button_pagination) - Creating Embed Pagination with Buttons easily!
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

//Now we have the button!
console.log(thing);
```

#### Preview on the above button :

![preview](https://media.discordapp.net/attachments/803265379484565564/864160182644899841/unknown.png)


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
// Passing, the Client, Message and the array of embeds =>

button_pagination(client, message, listOfEmbeds).then(e => null);

// Now you have the button pagination

```

#### Preview on the button pagination :

![preview](https://i.imgur.com/V25moSd.gif)


**Thank you for using the package!**