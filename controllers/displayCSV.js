const Csv = require('../models/csv');
// the following controller is used to view the csv file after click on upload button
module.exports.display = async function(req,res){
    if (!req.files){
        return res.status(400).send('No files were uploaded.');
    }
    // the csvFile is getting the csv file from the req url
    var csvFile = req.files.file;
    // the csvfiename is used to store the csv file name
    const csvfilename = csvFile.name;
    // the spltname is store the file spliting by dot. this is used to check the file extantion
    const splitName = csvfilename.split('.');
    const length = splitName.length;
    const validname = 'csv'
    // the following condion is used to checking the file extantion
    if(splitName[length-1]==validname){
        // the data var is used to store the csv data in string form
        const data = csvFile.data.toString();
        // the following function is used to store the data in mongodb
        await Csv.create({data:data,name:csvfilename});
        // the string data is seperated by \n to get the rows in the csv file
        const arr = data.split('\n');
        // console.log(arr);
        return res.render("displayData",{
           employees:arr,
           firstIndex:true,
           name:csvfilename
        });
    }else{
        return res.status(400).send('Invalid file type.')
    }
}
// the below controller is used to view the csv file by clicking on csv file showing on the home page
module.exports.display_with_id = async function(req,res){
    const id = req.params.id;
    // find the csv file with the id in database
    const csvfiledata = await Csv.findById(id);
    if(csvfiledata){
        let reqdata = csvfiledata.data;
        let nameofFile=csvfiledata.name
        let splitingdata = reqdata.split('\n');
        return res.render("displayData",{
            employees:splitingdata,
            firstIndex:true,
            name:nameofFile
        });
    }else{
        return res.render('home');
    }
    
}