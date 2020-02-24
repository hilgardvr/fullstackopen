import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Persons = (props) =>  {
  return (
    <div>
        {props.persons.map(person => 
          <div key={person.name}>
            {person.name} {person.number}<br/>
          </div>
        )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled: ', response)
        setPersons(response.data)
      })
  }, [])

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
      setPersons(persons.concat(
        {
          name: newName,
          number: newNumber
        })
      )
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
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
      <Persons persons={persons}/>
    </div>
  )
}

export default App