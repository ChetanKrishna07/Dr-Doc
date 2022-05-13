const mongoose = require('mongoose')

const medicineSchema = mongoose.Schema({
    name: String,
    availableList: [String]
})

module.exports = mongoose.model('Medicine', medicineSchema)