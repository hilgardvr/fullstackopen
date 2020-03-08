const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log("url: ", url)

console.log("connecting to mongo db...")

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => console.log("Connected to db"))
    .catch(err => console.log("Error occurred connection to db: ", err))

const phonebookSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})

phonebookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Phonebook', phonebookSchema)