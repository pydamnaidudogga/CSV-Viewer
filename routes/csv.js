var express= require("express");
var router= express.Router();
const homeController = require('../controllers/home');
const displayController = require('../controllers/displayCSV');
//Index route: To show the home page to upload file
router.get("/", homeController.home);

//CREATE route - Route to view the CSV file and store  data to database
router.post("/", displayController.display);
// the below route is used view the csv file in the database
router.get('/viewdata/:id',displayController.display_with_id);


//Exporting to the index.js
module.exports =router;