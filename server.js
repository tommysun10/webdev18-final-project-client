//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('/dist/hello-world-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/hello-world-app/index.html'));
});

//CORS Cross Origin
app.use(function(req, res, next) {

	// Fix from SO fo allow multiple origins, doesn't seem to work

	// var allowedOrigins = [WEBSITE_URL, SPRING_URL];
	// var origin = req.headers.origin;
	// if(allowedOrigins.indexOf(origin) > -1){
	// 	res.setHeader('Access-Control-Allow-Origin', origin);
	// }

	res.header("Access-Control-Allow-Origin", "https://webdev-final-project-angular.herokuapp.com/home");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);