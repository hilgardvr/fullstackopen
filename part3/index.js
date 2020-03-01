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

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.listen(port)
