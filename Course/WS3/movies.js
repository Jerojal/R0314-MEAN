var http = require('http');

var options = {
    host: 'https://www.omdbapi.com/',
    path: '/movies',
}
var request = http.request(options, function(response){
    var data = '';
    res.on('data', function(chunk){
        data += chunk;
    });
    res.on('end', function(){
        console.log(data);
    
    });
});
request.on('error', function(e){
    console.log(e.message);

});
request.end();
