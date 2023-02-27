const express = require('express'),
 bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require("mongoose");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema=require("./Schema/schema");
var liveServer = require("live-server");


const routes = require('./routes/index');
var app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/newCollection", {
useNewUrlParser: true,
useNewUrlParser: true,
useUnifiedTopology: true
});


// Body-parser middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());


app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Total-Count ,Content-Type, Accept");
	res.header("Access-Control-Expose-Headers", "X-Total-Count")
	next();
  });

app.use('/api', routes);

app.listen(3000, function(){
	console.log("App is running on Port 3000");
});
// app.listen(8080, function(){
// 	console.log("App is running on Port 3000");
// });



// var params = {
// 	port: 8080, // Set the server port. Defaults to 8080.
// 	host: "122.179.196.113", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
// 	root: "/public", // Set root directory that's being served. Defaults to cwd.
// 	open: false, // When false, it won't load your browser by default.
// 	ignore: 'scss,my/templates', // comma-separated string for paths to ignore
// 	file: "app.js", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
// 	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
// 	mount: [['/components', './node_modules']], // Mount a directory to a route.
// 	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
// 	middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
// };
// liveServer.start(params);

