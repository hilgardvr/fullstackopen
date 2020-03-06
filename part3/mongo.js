const mongoose = require('mongoose')

if (process.argv.length !== 3 && process.argv.length !== 5) {
    console.log('Usage: node mongo.js <password> Optional: <name> <number>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://hilgardvr:${password}@fullstack-qubgx.mongodb.net/test?retryWrites=true&w=majority` 
//`mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const phonebookSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})

const Person = mongoose.model('Phonebook', phonebookSchema)

if (process.argv.length === 5) {
    const person = new Person({
        id: Math.floor(Math.random() * 100000),
        name: process.argv[3],
        number: process.argv[4],
    })
    person.save().then(response => {
        console.log('added: ', response.name + ' number ' + response.number + ' to phonebook')
        mongoose.connection.close()
    })
} else if (process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}
