import React from 'react'

const Persons = (props) =>  {
  return (
    <div>
        {props.persons.map(person => 
          <div key={person.name}>
            {person.name} {person.number}<button onClick={() => props.delete(person.id, person.name)}>delete</button><br/>
          </div>
        )}
    </div>
  )
}

export default Persons