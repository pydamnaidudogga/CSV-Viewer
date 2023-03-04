const mongoose = require('mongoose');
// const uri = 'mongodb://127.0.0.1/csvFiles';
const uri = "mongodb+srv://pydamnaidu:D1OBXUD9rcUXnqwn@database.cjh6ckr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser: true});
mongoose.set('strictQuery', false)
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection problem'))
db.on('open',function(){
    console.log('Connected successfully to MongoDB');
});

module.exports = db;
