const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())


let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 4
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "35-23-6423122",
        id: 4
    }
]

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
    const id = Math.floor(Math.random() * 100000)
    const name = req.body.name
    const found = persons.find(person => person.name === name)
    if (!name || found) {
        return res.status(400).json({error: 'invalid name'})
    } else {
        const person = {
            id: id,
            name: req.body.name,
            number: req.body.number,
        }
        persons = persons.concat(person)
        res.send(person)
    }
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.listen(port)
