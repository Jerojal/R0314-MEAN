const PORT = process.env.PORT || 3000;
var http = require('http');

http
    .createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end();})

    .listen(PORT);
var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html')
});

app.get('/guestbook', function (req, res) {
    var data = require('./JSONdataset.json');

    var results = '<table border="1">';

    for (var i=0; i < data.length; i++){
        results +=
        '<tr>'+
        '<td>'+data[i].username+'</td>'+
        '<td>'+data[i].country+'</td>'+
        '<td>'+data[i].message+'</td>'+
        '<td>'+data[i].date+'</td>'+
        '</tr>';
    }
    res.send(results);

});


app.get('/newmessage', function (req, res) {
    res.sendFile(__dirname + '/newmessage.html');
});

app.post('/newmessage', function (req, res) {   
var data =require("./JSONdataset.json");

data.push({
    "username": req.body.username,
    "country": req.body.country,
    "message": req.body.message,
    "date": new Date()
 });
 var jsonStr = JSON.stringify(data);

 fs.writeFile('JSONdataset.json', jsonStr,  (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});
res.send("Saved the data to a file. Browse to /guestbook to see the results.")
});
app.get('/ajaxmessage', function (req, res) {
    res.sendFile(__dirname + '/newmessage.html');
});

app.post('/ajaxmessage', function (req, res) {   
var data =require("./JSONdataset.json");

data.push({
    "username": req.body.username,
    "country": req.body.country,
    "message": req.body.message,
    "date": new Date()
 });
 var jsonStr = JSON.stringify(data);

 fs.writeFile('JSONdataset.json', jsonStr,  (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});
res.send("Saved the data to a file. Browse to /guestbook to see the results.")
});

app.get('*', function (req, res) {
    res.send('404');
});

