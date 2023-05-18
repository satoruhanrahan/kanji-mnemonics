const express = require('express')
const {
    getAllKanji,
    getSingleKanji
} = require('../controllers/KanjiController')

const router = express.Router()

// GET all kanji
router.get('/', getAllKanji)

// GET a single kanji
router.get('/:id', getSingleKanji)

module.exports = router