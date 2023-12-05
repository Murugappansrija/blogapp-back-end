const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MOGODBCONNECTION)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}
    
        module.exports= connectDb;
