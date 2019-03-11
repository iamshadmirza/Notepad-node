console.log('Starting notepad app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
console.log(notes.addNote());
// var user = os.userInfo();
// console.log('Hello', user.username);
// fs.appendFile('greetings.txt', `\nHello ${user.username} ` + `You are ${notes.age} years old`, (error) => {
//     console.log('error', error);
// });