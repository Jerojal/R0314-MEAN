var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html')
});

app.get('/details', function (req, res) {
    var data = require('./JSONdataset.json');

    var results = '<table border="1">';

    for (var i=0; i < data.length; i++){
        results +=
        '<tr>'+
        '<td>'+data[i].Name+'</td>'+
        '<td>'+data[i].Email+'</td>'+
        '</tr>';
    }
    res.send(results);

});

app.get('/add', function (req, res) {
    var data = require('./JSONdataset.json');
    data.push({
        "Name": "Mika Stenberg",
        "Company": "Laurea",
        "Email": "sfasf",
        "Date": "30/3/2016 \r\n"
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile('JSONdataset.json', jsonStr,  (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    res.send("Saved the data to a file. Browse to /details to see the results.")
});

app.get('/adduser', function (req, res) {
    res.sendFile(__dirname + '/adduser.html');
});

app.post('/adduser', function (req, res) {   
var data =require("./JSONdataset.json");

data.push({
    "Name": req.body.name,
    "Company": req.body.company,
    "Email": req.body.email,
    "Date": new Date()
 });

 var jsonStr = JSON.stringify(data);

 fs.writeFile('JSONdataset.json', jsonStr,  (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});
res.send("Saved the data to a file. Browse to /details to see the results.")
});

app.get('*', function (req, res) {
    res.send('404');
});

app.listen(8081, function () {  
    console.log('Example app listening on port 8081!');
});
