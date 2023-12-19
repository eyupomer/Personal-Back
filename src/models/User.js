const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    jobTitle: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    about: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', userSchema)