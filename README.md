# djs-helper-v13

djs-helper-v13 is a helper for discord.js v13. It has many useful things, that make v13 easier!

## Creating Buttons

```js
const { create_button } = require('djs-helper-v13'); // requring the file!

let thing = create_button({ style: 'green', label: 'Hello', id: 'SED' }); // creating the button (with options that we want!)

console.log(thing); // returns =>
/*
MessageButton {
  type: 'BUTTON',
  label: 'Hello',
  customId: 'SED',
  style: 'SUCCESS',
  emoji: null,
  url: null,
  disabled: false
}
*/

```
