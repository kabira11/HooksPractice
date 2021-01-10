import React from 'react'
import Person from './Person';

function Personlist() {
    const persons = [
        {
          id : 1,
          name : 'Pankaj',
          age : 25,
          skills : 'React'
        },
        {
            id : 2,
            name : 'Subhashree',
            age : 25,
            skills : 'Automation Testing'
        },
        {
            id : 3,
            name : 'Trayambak',
            age : 25,
            skills : 'Java'
        }
    ]

    const personlist = persons.map(person => <Person key = {person.id} person = {person}/>)
  return (
    <div>
      {personlist}
    </div>
  )
}

export default Personlist
