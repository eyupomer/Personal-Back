const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    linkedIn: {
        type: String,
        required: true,
        trim: true,
    },
    gitHub: {
        type: String,
        required: true,
        trim: true,
    },
    cv: {
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = mongoose.model('contact', contactSchema)