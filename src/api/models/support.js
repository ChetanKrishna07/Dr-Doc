const mongoose = require('mongoose')

const supportSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        validate: {
            validator: (email) => {
                if (email.includes('@') || email == "") {
                    return true
                } else {
                    return false
                }
            },
            message: "Invalid email"
        }
    },
    phone: {
        type: Number,
        maxLength: 10,
        minLength: 10
    },
    query: String
})

module.exports = mongoose.model('Support', supportSchema)