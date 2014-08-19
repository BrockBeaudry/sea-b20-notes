'use strict';

var Note = require('./notes/models/note');

var note = new Note();
note.set('noteBody', 'wow such note, so words');

console.log(note);

// Not a real pattern; use listeners
// For debugging only
note.save({
    success: function(res) {
        console.log('success!');
        console.log(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }
});