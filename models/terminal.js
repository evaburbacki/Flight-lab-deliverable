const mongoose = require('mongoose')

const TerminalSchema = new mongoose.Schema ({
    "terminalSchema",
        name: String,
        flights: [{
            type: mongoose.Schema.Types.ObjectId,
        }]
    })
    const Terminal = mongoose.model(
        "terminal", TerminalSchema
    )
module.exports = Passenger