require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Phonebook = require('./model/mongo')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/', (req, res) => {
    res.send('<h1>Root of API</h>')
})

app.get('/info', (req, res) => {
    const html = `  <p>Phonebook has info for ${persons.length} people</p>
                    <p>${new Date()}</p>`
    res.send(html)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.send(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const pid = Number(req.params.id)
    persons = persons.filter(({id}) => pid !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const name = req.body.name
    if (!name) {
        return res.status(400).json({error: 'invalid name'})
    } else {
        const person = new Phonebook({
            name: req.body.name,
            number: req.body.number,
        })
        person.save().then(savedPerson => res.json(savedPerson.toJSON()))
    }
})

app.get('/api/persons', (req, res) => {
    Phonebook.find({}).then(result => {
        res.json(result)
    })
})

app.listen(port)
console.log("App is running on port: " + port)
