const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    img: {
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = mongoose.model('skill', skillSchema)