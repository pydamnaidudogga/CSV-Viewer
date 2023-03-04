// express
const express = require('express');
// the server is running on this port
const port = 8000;
// Calls the express function "express()" and puts new Express application inside the app variable 
const app = express();
// connected to database
const db = require('./config/mongoose');
// Parse incoming request bodies in a middleware before your handlers, available under the req.body propert
const bodyParser= require("body-parser");
// this helps to uploade a file and create req.files this contians the file
const  fileUpload= require("express-fileupload");
const   methodOverride= require("method-override");
// routes for viewing the csv
var csvRoutes=require("./routes/csv");
// setting up express-ejs for better experiance and for clear understanding
app.set("view engine", "ejs");
// set ejs-views to views folder
app.set('views','./views');
// this url encoded is used to encode the req url
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// setting the static folder
app.use(express.static(__dirname+"/assets"));
app.use(methodOverride("_method"));
app.use(fileUpload());

// using the csv routes in index.js
app.use("/upload", csvRoutes);





// this server is listening
app.listen(port,()=>{
    
        console.log('Server is successfully running on port :8000')
    
})