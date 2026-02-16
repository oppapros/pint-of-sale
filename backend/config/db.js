const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

exports.dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database Connected')

    }catch(error){
        console.log(error.message)

    }
}
//module.exports = dbConnetion;