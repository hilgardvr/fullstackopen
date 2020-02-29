import React, { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import personService from './services/persons.js'
import Notification from './components/Notification.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [operationMessage, setOperationMessage] = useState(null)

  useEffect(() => {
    personService.getAll()
    .then(data => {
      setPersons(data)
    })}, [])

  const deletePerson = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      personService
        .deletePerson(id)
        .then(_ => setPersons(persons.filter(person => person.id !== id)))
        .catch(error => console.log(error))
    }
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const filtered = persons.filter(person => person.name === newName)
    if (filtered.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
          name: newName,
          number: newNumber
        }
        personService.create(newPerson)
          .then(data => {
            setPersons(persons.concat(data))
            setNewName('')
            setNewNumber('')
            setOperationMessage(`Successfully added ${data.name}`)
            setTimeout(() => setOperationMessage(null), 5000)
          })
        .catch(error => console.log('error: ', error))
    }
  }

  return (
    <div>
      <Notification message={operationMessage}/>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} delete={deletePerson}/>
    </div>
  )
}

export default App