require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
const URI = process.env.MONGODB_URI

async function main () {

    mongoose.connect(URI)

    const goalSchema = {
        name: {
            type: String,
            required: true
        },
        time: String
    }
    
    const completedSchema = {
        name: String,
        time: String
    }

    const Goal = mongoose.model('Goal', goalSchema)
    const Completed = mongoose.model('Completed', completedSchema)
    
    app.get('/', (req, res) => {
        res.render('home')
    })
    
    app.get('/list', async (req, res) => {
        const goals = await Goal.find()
        res.render('list', { goalsList: goals })
    })
    
    app.get('/compose', (req, res) => {
        res.render('compose')
    })
    
    app.get('/completed', async (req, res) => {
        const completed = await Completed.find()
        res.render('completed', {completedGoalsList : completed})
    })
    app.post('/', (req, res) => {
        res.redirect('/compose')
    })
    
    app.post('/compose', (req, res) => {
        const goal = new Goal ({
            name: req.body.goal,
            time: req.body.time
        })
        goal.save()
        res.redirect('/list')
    })
    
    app.post('/completed', async (req, res) => {
        const completedGoalId = req.body.radio
        const completedList = await Goal.findById(completedGoalId)
        const completedGoal = new Completed ({
            name: completedList.name,
            time: completedList.time
        })
        completedGoal.save()
        await Goal.findByIdAndDelete(completedGoalId)
        res.redirect('/list')
    })

    app.post('/clear' , async (req, res) => {
        await Completed.deleteMany()
        res.redirect('/completed')
    })
}
app.listen(1111, () => {
        console.log("Server running on http://localhost:1111");
})
main()