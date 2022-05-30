const mongoose = require('mongoose')

const storeSchema = mongoose.Schema({
    name: String,
    availableList: [String],
    address: [String],
    phone: {
        type: Number,
        minLength: 10,
        maxLength: 10
    },
    website: String
})

module.exports = mongoose.model('Store', storeSchema)