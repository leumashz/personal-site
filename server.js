var express			= require('express'),
	app 			= express(),
	bodyParser 		= require('body-parser'),
	http			= require('http'),
	methodOverride	= require('method-override'),
	cors			= require('cors'),
	server			= http.createServer(app),
	path			= require('path'),
	nodemailer		= require('nodemailer'),
	port			= 80; 


app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(methodOverride());

app.use('/',express.static(__dirname + '/public'));
app.use(cors());

/*app.get('*', function(req, res){  
    res.sendFile('index.html',{root: __dirname + '/public/'});
});*/

//enviar email
app.post('/', function(req, res){
	var transporter = nodemailer.createTransport('smtps://samuelgz12345%40gmail.com:lwnsekhlcidherqi@smtp.gmail.com');

	var mailOptions = {
	    name: req.body.name,
	    from: req.body.email, 
	    to: 'evileumas@gmail.com', 
	    subject: req.body.asunto, 
	    html: '<strong>Nombre: </strong> ' + req.body.name.toString() + '<br/>' + '<strong>email: </strong>' + req.body.email.toString() + '<br/>' + '<strong>mensaje: </strong>' + req.body.mensaje.toString()
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    
	    console.log('Message sent: ' + info.response);
	    res.redirect('/');
	});

});


app.listen(port, function() {
	console.log("Server up");	
}); 