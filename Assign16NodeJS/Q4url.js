var http = require('http');
var u = require('Q2tAbleform.html');

var myserve = http.createServer(function(req,res){
var obj = u.parse(req.url,true);
var nm = obj.query.name;
res.writeHead(200,{'content-type':'text/html'});

res.write("Welcome "+nm);

res.end();
});

myserve.listen(9000,function(){
console.log("Server Started at 9000");
});


// http://localhost:9000/?name=sanket