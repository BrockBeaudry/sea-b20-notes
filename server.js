var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

var databaseUri = process.env.MONGOLAB_URI ||process.env.MONGOHQ_URL ||
        process.env.MONGO_URL || 'mongodb://localhost/notes-development';

mongoose.connect(databaseUri || 'mongodb://localhost/notes-development');

app.use(express.static(__dirname + '/static'));

app.use(bodyparser.json());
require('./routes/note-routes')(app);
require('./routes/index')(app);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port: %d', server.address().port);
});
