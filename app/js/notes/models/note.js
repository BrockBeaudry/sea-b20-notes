'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = require('jquery');

var Note = Backbone.Model.extend({
    // URL established in the API
    url: '/api/v_0_0_1/notes',
    idAttributes: '_id',    // Makes Backbone database agnostic; id used for DB reference

    initialize: function() {
        console.log('Note initialized.');
    },

    defaults: {
        noteBody: ''
    }
});

module.exports = Note;