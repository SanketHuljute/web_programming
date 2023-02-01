var http = require('http');

var server = http.createServer(function(request,response){
response.writeHead(200,{'content-type':'text/html'});

response.write("<h2> Hello from Node JS </h2>");
response.end(9);

});

server.listen(9000,function(){
console.log("server started at 9000");
});