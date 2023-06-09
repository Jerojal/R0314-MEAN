
var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public/demosite/'));
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/public/index.html');
});



// Listing user data from a file!
app.get('/list', function (req, res) {
// Read file with some data and display to the user
  res.sendFile(__dirname+ "/exampledata.txt");
});

// Send out the entire raw data
 app.get('/jsondata', function (req, res) {
  var data = require('./exampledata2.json');
  res.json(data);
});

// Or we can parse out the details

app.get('/details', function (req, res) {
 var data = require('./exampledata2.json');

 // Parse the results into a variabke
 var results ='<table border="1"> ';

 for (var i=0; i < data.length; i++){
   results +=
   '<tr>'+
   '<td>'+data[i].Name+'</td>'+
   '<td>'+data[i].Email+'</td>'+
   '</tr>';
 }

  res.send(results);
});

// Add data
app.get('/add', function (req, res) {

 // Load the existing data from a file
 var data = require('./exampledata2.json');

 // Create a new JSON object and add it to the existing data variable
 data.push({
    "Name": "Mika Stenberg",
    "Company": "Laurea",
    "Email": "mika@laurea.fi",
    "Date": "30/3/2016 \r\n"
  });

// Convert the JSON object to a string format
 var jsonStr = JSON.stringify(data);

 // Write data to a file
 fs.writeFile('exampledata2.json',jsonStr, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

 res.send("Saved the data to a file. Browse to the /details to see the contents of the file");
});

// Serve a form to the user
app.get('/adduser', function (req, res) {

   res.sendFile(__dirname + '/public/adduser.html');
});

// Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Route for form sending the POST data

app.post('/adduser', function (req, res) {
var data= "";
data += req.body.name;
data += req.body.email;
data += req.body.company;
console.log(data);
res.send(data);
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});