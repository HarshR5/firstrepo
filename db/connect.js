const connectionstring  = process.env.db_connectionstring;
// const assynchandler = require('express-async-handler');
const mongoose = require('mongoose');

const connect = async()=>{
    try{
        await mongoose.connect(connectionstring);
        console.log("Data base connected successfully");
    }catch(error){
        console.log("Data base connection failed");
        console.log(error);

    }
}
module.exports = connect;
