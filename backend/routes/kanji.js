const express = require('express')
const {
    getAllKanji,
    getSingleKanji,
    updateKanji
} = require('../controllers/KanjiController')

const router = express.Router()

// GET all kanji
router.get('/', getAllKanji)

// GET a single kanji
router.get('/:id', getSingleKanji)

// UPDATE a single kanji
router.post('/:id', updateKanji)

module.exports = router