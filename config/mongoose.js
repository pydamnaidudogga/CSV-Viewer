const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/csvFiles',{useUnifiedTopology: true,useNewUrlParser: true});
mongoose.set('strictQuery', false)
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection problem'))
db.on('open',function(){
    console.log('Connected successfully to MongoDB');
});

module.exports = db;