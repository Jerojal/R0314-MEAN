const { table } = require("console");
var http=require("http");
var server = http.createServer(function(request,response)

{

    if(request.url === "/")
    {                
        var fs = require("fs");
        fs.readFile('frontpage.html', results);
        response.writeHead(200,{'Content-Type':'text/html'})
        function results(err, data){
        if (err) return console.error(err);
        response.write(data);
          
        }}
    if(request.url === "/contact")
    {       
         var fs = require("fs");
        fs.readFile('contact.html', results);
        response.writeHead(200,{'Content-Type':'text/html'})
        function results(err, data){
        if (err) return console.error(err);
        response.write(data);
        }
        
    }

    if(request.url === "/plaintext")
    {       
         var fs = require("fs");
        fs.readFile('contact.html', results);
        response.writeHead(200,{'Content-Type':'text/plain'})
        function results(err, data){
        if (err) return console.error(err);
        response.write(data);
        }
        
    }

    if(request.url === "/json")
    {       
         var fs = require("fs");
        fs.readFile('contact.html', results);
        response.writeHead(200,{'Content-Type':'text/json'})
        function results(err, data){
        if (err) return console.error(err);
        response.write(data);
        }
        
    }

});


var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server is running at http://localhost:%d",port);


