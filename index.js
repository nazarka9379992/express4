var express = require ('express');
var app = express ();
app.set('view engine', 'ejs');


app.get('/', function(req, res){
	res.end();
});
app.listen(3000);