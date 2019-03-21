const fs = require('fs');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'body of note',
    demand: true,
    alias: 'b'
};

var argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all the notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

if (argv._[0] === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
        console.log('Note title already taken');
    } else {
        console.log('Note created successfully');
        notes.logNote(note);
    }
} else if (argv._[0] === 'read') {
    var note = notes.getNote(argv.title);
    if (_.isUndefined(note)) {
        console.log('Note not found');
    } else {
        console.log('Note found is');
        notes.logNote(note);
    }
} else if (argv._[0] === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed successfully' : 'Note not found';
    console.log(message);
} else if (argv._[0] === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(element => {
        notes.logNote(element);
    });
}
