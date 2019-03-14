console.log('Starting notepad app');

const fs = require('fs');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;
console.log('Yargs', argv);

if (argv._[0] === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
        console.log('Note title already taken');
    } else {
        console.log('Note created successfully');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
} else if (argv._[0] === 'read') {
    notes.getNote(argv.title);
} else if (argv._[0] === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed successfully' : 'Note not found';
    console.log(message);
} else if (argv._[0] === 'list') {
    notes.getAll();
}
