var fs = require("fs");

var data = fs.readFileSync('example.txt');
data += fs.readFileSync('example2.txt');

fs.writeFileSync("books.txt", data, (err) =>{
    if (err) console.log(err);
  
    console.log("file written success");
    console.log(fs.readFileSync("books.txt", "utf8"));



});    fs.appendFileSync("books.txt","\nI wrote this!",(err)=> {
    if (err) console.log(err);
});
