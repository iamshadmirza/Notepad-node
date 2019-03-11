console.log('Starting notepad app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
console.log(notes.addNote());
const _ = require('lodash');
var filteredArray = _.uniq(['Shad', 1, 2, 3, 'Shad', 2, 3, 4]);
console.log(filteredArray);
// var user = os.userInfo();
// console.log('Hello', user.username);
// fs.appendFile('greetings.txt', `\nHello ${user.username} ` + `You are ${notes.age} years old`, (error) => {
//     console.log('error', error);
// });