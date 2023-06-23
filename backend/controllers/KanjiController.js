const Kanji = require('../models/KanjiModel')
const mongoose = require('mongoose')

// get all workouts
const getAllKanji = async (req, res) => {
    const kanji = await Kanji.find({}).sort({ createdAt: -1 })
    res.status(200).json(kanji)
}

// get a single kanji
const getSingleKanji = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such kanji' })
    }

    const kanji = await Kanji.findById(id)

    if (!kanji) {
        return res.status(404).json({ error: 'No such kanji' })
    }

    res.status(200).json(kanji)
}

// update a kanji
const updateKanji = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such kanji' })
    }

    const kanji = await Kanji.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!kanji) {
        return res.status(404).json({ error: 'No such kanji' })
    }

    res.status(200).json(kanji)
}

module.exports = {
    getAllKanji,
    getSingleKanji,
    updateKanji
}