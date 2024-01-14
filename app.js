const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

const goals = []
const times = []
const completed = []

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/list', (req, res) => {
    res.render('list', { goalsList: goals, timeList: times })
})

app.get('/compose', (req, res) => {
    res.render('compose')
})

app.get('/completed', (req, res) => {
    res.render('completed')
})
app.post('/', (req, res) => {
    res.redirect('/compose')
})

app.post('/compose', (req, res) => {
    goals.push(req.body.goal)
    times.push(req.body.time)
    res.redirect('/list')
})

app.post('/completed', (req, res) => {
    console.log(req.body.radio);
    res.redirect('/list')
})
app.listen(1111, () => {
    console.log("Server running on http://localhost:1111");
})