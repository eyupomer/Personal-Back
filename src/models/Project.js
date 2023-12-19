const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    demoLink: {
        type: String,
        required: false,
        trim: true,
    },
    codeLink: {
        type: String,
        required: false,
        trim: true,
    },
    technologies: {
        type: [String],
        required: true,
        trim: true,
    },
    img: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model('project', projectSchema)