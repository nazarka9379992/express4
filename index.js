var express = require ('express');
var app = express ();
app.set('view engine', 'ejs');
var _ = require ('underscore');
var fs = require ('fs');

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap'));
app.set('view engine', 'ejs');

// app.post('/sendArticles', function(req,res){
// 	var name = req.body.name;
// 	console.log(name);



app.get('/', function(req, res){
	var data = fs.readFile('./data.json', function(err, data){
		if (err) {
			console.log(err)
		}
	res.render('index', {articles: JSON.parse(data)});
	});

	
});
app.listen(3000);