console.log('Starting notepad app');
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log('Hello', user.username);
fs.appendFile('greetings.txt', `\nHello ${user.username}`, (error) => {
    console.log('error', error);
});