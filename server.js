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

var server = http.createServer(app);

server.listen(port);