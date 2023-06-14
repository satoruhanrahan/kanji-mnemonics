// if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
// }

const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const kanjiRoutes = require('./routes/kanji.js')

// express app
const app = express()
// Enable CORS
app.use(cors());
// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// port
const port = process.env.PORT || 4000;

// routes
app.use('/api/kanji', kanjiRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Add MongoDB client to the app locals
        // app.locals.db = client.db('Kanji-Mnemonics');
        // listen for requests
        app.listen(port, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    //     app.use((req) => {
    //         express.static(req.path.join(__dirname, '../create-react-app', 'build'))
    //     })
    app.get('/*', (req, res) => {
        res.sendFile(req.path.join(__dirname, '../create-react-app', 'build', 'index.html'));
    })
}
