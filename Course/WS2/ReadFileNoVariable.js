var fs = require("fs");

console.log("Program started");



for (var i = 0; i < 15; i++){
    console.log("Node just keeps on going while the file is being read...");
}
//non-anonymous function
fs.readFile('example.txt', results);
function results(err, data){
    if (err) return console.error(err);
    console.log("Results of fileread:")
    console.log(data.toString());
}
//anonymous function
fs.readFile('example2.txt', function (err, data){
    if (err) return console.error(err);
    console.log("Results of fileread:")
    console.log(data.toString());
});



fs.writeFile('combiningfiles.js')
console.log("\nProgram Ended");
