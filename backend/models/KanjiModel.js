const mongoose = require('mongoose')

const Schema = mongoose.Schema

const kanjiSchema = new Schema({
    character: {
        type: String,
        required: true
    },
    kunyomi: {
        type: Array,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    mnemonic: {
        type: String,
        required: true
    },
    onyomi: {
        type: Array,
        required: true
    },
    components: {
        type: Array,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Kanji', kanjiSchema)