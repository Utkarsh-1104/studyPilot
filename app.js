const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/list', (req, res) => {
    res.render('list')
})
app.post('/', (req, res) => {
    res.redirect('/list')
})
app.listen(1111, () => {
    console.log("Server running on http://localhost:1111");
})