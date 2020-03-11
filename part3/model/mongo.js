/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

// eslint-disable-next-line no-console
console.log('url: ', url);

// eslint-disable-next-line no-console
console.log('connecting to mongo db...');

mongoose.connect(url, { useNewUrlParser: true })
// eslint-disable-next-line no-console
  .then(() => console.log('Connected to db'))
// eslint-disable-next-line no-console
  .catch((err) => console.log('Error occurred connection to db: ', err));

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
});

phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line no-underscore-dangle
    returnedObject.id = returnedObject._id.toString();
    // eslint-disable-next-line no-underscore-dangle
    delete returnedObject._id;
    // eslint-disable-next-line no-underscore-dangle
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Phonebook', phonebookSchema);
