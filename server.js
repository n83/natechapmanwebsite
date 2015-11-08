var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var app = express();
var controllers = require('./controllers');

app.use(express.static('public'));

controllers.init(app);

app.get('/api/users', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({ name: 'Nate', isValid: true, group: 'Admin' });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app);

server.listen(port);