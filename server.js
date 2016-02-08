var express			= require('express'),
	app 			= express(),
	bodyParser 		= require('body-parser'),
	http			= require('http'),
	methodOverride	= require('method-override'),
	cors			= require('cors'),
	server			= http.createServer(app),
	path			= require('path'),
	port			= 80; 


app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(methodOverride());

app.use('/',express.static(__dirname + '/public'));
app.use(cors());

app.get('*', function(req, res){  
    res.sendFile('index.html',{root: __dirname + '/desktop/main/views/'});
});

app.listen(port, function() {
	console.log("Server up");	
}); 