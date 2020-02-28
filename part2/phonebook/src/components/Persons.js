import React from 'react'

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

export default Persons