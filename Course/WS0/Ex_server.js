const { table } = require("console");
var http=require("http");
var server = http.createServer(function(request,response)
{

    if(request.url === "/")
    {
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<h1>Miten menee?!</h1>');
        response.write("<h2>How are you today</h2>");
        response.end('Hello from home page');
          
    }
    if(request.url === "/myblog")
    {
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.write('<h1>Own blog heading</h1>');
    response.end("<h2>Hello my own page</h2>")
    }

})


var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server is running at http://localhost:%d",port);


