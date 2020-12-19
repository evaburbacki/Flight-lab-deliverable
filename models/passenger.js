const mongoose = require('mongoose')

const Passenger = mongoose.model (
    "passenger",
    new mongoose. Schema ({
        firstName: String,
        lastName: String,
        dateOfBirth: Integer,
    })
)

module.exports = Passenger