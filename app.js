console.log('Starting notepad app');

const fs = require('fs');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;
console.log('Yargs', argv);

if (argv._[0] === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (argv._[0] === 'read') {
    notes.getNote(argv.title);
} else if (argv._[0] === 'remove') {
    notes.removeNote(argv.title);
} else if (argv._[0] === 'list') {
    notes.getAll();
}
