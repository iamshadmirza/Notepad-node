console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding Note', title, body);
};

var getAll = () => {
    console.log('getting all');
};

var getNote = (title) => {
    console.log('reading', title);
}

var removeNote = (title) => {
    console.log('removing', title);
}

module.exports = {
    addNote, getAll, getNote, removeNote
};