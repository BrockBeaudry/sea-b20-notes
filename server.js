'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

var databaseUri = process.env.MONGOLAB_URI ||process.env.MONGOHQ_URL ||
        process.env.MONGO_URL || 'mongodb://localhost/notes-development';

mongoose.connect(databaseUri || 'mongodb://localhost/notes-development');

// app.use(express.static(__dirname + '/static'));

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

// can set dir as environment variable instead of branching
// if(process.env.ENVIRONMENT === 'production') {
//     app.use(express.static(__dirname + '/dist'));
// } else {
//     app.use(express.static(__dirname + '/build'));
// }

app.use(bodyparser.json());
require('./routes/note-routes')(app);
require('./routes/index')(app);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port: %d', server.address().port);
});
