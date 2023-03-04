const Csv = require('../models/csv');

module.exports.home = async function(req,res){
    
    const data = await Csv.find({});
    // console.log(data);

    return res.render('home',{
        data:data
    });
}