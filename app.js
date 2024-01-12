const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

const goals = []

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/list', (req, res) => {
    res.render('list', { goalsList: goals })
})

app.get('/compose', (req, res) => {
    res.render('compose')
})

app.post('/', (req, res) => {
    res.redirect('/compose')
})

app.post('/compose', (req, res) => {
    goals.push(req.body.goal)
    res.redirect('/list')
})

app.listen(1111, () => {
    console.log("Server running on http://localhost:1111");
})