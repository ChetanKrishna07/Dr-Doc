const mongoose = require('mongoose')

const medicineScheme = mongoose.Schema({
    name: String,
    availableList: [String]
})

module.exports = mongoose.model('Medicine', medicineScheme)