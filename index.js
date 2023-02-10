const express = require('express'),
 bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require("mongoose");

const routes = require('./routes/index');
var app = express();



mongoose.connect("mongodb://localhost:27017/newCollection", {
useNewUrlParser: true,
useNewUrlParser: true,
useUnifiedTopology: true
});


// Body-parser middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());


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
//test
