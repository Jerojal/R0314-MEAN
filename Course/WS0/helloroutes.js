
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