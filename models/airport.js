const mongoose = require('mongoose')

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        name: String,
        capacity: Number,
        country: String,
        terminals: [Terminal.Schema],
        opened: Date,
    })
)

module.exports = Airport