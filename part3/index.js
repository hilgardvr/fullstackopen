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

const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({error: 'malformed id'})
    }

    next(error)
}

app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('<h1>Root of API</h>')
})

app.get('/info', (req, res) => {
    const html = `  <p>Phonebook has info for ${persons.length} people</p>
                    <p>${new Date()}</p>`
    res.send(html)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    Phonebook.findById(id)
        .then(person => {
            if (person) {
                res.json(person.toJSON())
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    Phonebook.findByIdAndDelete(id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
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
