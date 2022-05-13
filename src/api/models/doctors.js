const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    name: String,
    specialization: String,
    Online: Boolean,
    Offline: Boolean,
    education: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)