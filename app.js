var express = require('express'),
routes = require('./routes'),
path = require('path'),
http = require('http'),
stylus = require('stylus'),
nib = require('nib'),
operations = require('./connection/operations.js')

var app = express();
function compile(str, path) {
	return stylus(str).set('filename', path).use(nib());
}
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(stylus.middleware({ src: __dirname + '/public', compile: compile}));
app.use(express.static(path.join(__dirname,'public')));

if('development'==app.get('env'))
	app.use(express.errorHandler());

app.get('/', routes.index);
app.get('/operations', routes.operationList);
app.get('/calculator', routes.calculator);

app.post("/calculator",function(req,res){
	var value1 = parseInt(req.body.value1)
	var value2 = parseInt(req.body.value1)
	if(req.body.operation==='+')
		var result = value1 + value2
	else if(req.body.operation==='-')
		var result = value1 - value2;
	else if(req.body.operation==='*')
		var result = value1 * value2;
	else if(req.body.operation==='/')
		var result = value1 / value2;
	var data = {
		value1: value1,
		value2: value2,
		operation: req.body.operation,
		result: result
	};
	operations.operations.insertOperation(data);
	res.json(data);
});

http.createServer(app).listen(8080, function(){
	console.log('Сервер запущен по адресу 8080');
});