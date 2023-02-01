var exp = require('express')
var mysql = require('mysql2')

var app = exp();

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'sanket1997',
	database:'test'
})

con.connect(function(err){
	if(!err)
		console.log("connected");
	else
		console.log("con.failed");
})

app.get('/emps',function(req,res){
	con.query("select * from emp",function(err,result){
		if(!err)
		{
			res.write("<table border=1>");
			result.forEach(function(v){
				res.write("<tr>");
				res.write("<td>"+v.EMPNO+"</td>");
				res.write("<td>"+v.ENAME+"</td>");
				res.write("<td>"+v.JOB+"</td>");
				res.write("<td>"+v.DEPTNO+"</td>");
				res.write("</tr>");
		});
		res.write("</table>");
		res.end();
		}
	});
});

app.all('*',function(req,res){
	res.send("Invalid URL");
});				

app.listen(9000,function(){
	console.log("server started at 9000");
})