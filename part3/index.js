const express = require('express')
const app = express()
const port = 3001

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

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.listen(port)
