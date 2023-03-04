const mongoose = require('mongoose');
// creating a mongodb Schema for stroring the csv file data into the data base
const csvfile = new mongoose.Schema({
    data: {
        type : String
    },
    name: {
        type : String
    }
});
// creating the mongoose model with this schema
 const Csvdata = mongoose.model('Csvdata',csvfile);

 module.exports = Csvdata;