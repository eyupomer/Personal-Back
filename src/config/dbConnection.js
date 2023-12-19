require("dotenv").config()
const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log("Connected to mongoDB successfully :)");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect