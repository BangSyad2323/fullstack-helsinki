import { useState, useEffect } from 'react'
import axios from 'axios'

// components
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([ ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  
  // get data
  const getData = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fullfield')
      setPersons(response.data)
    })
  }

  useEffect(getData, [])

  // filter
  const handleFilter = () => {
    setFilter(event.target.value)
    console.log('personsToShow', personsToShow)
  }

  // filter function
  const personsToShow = persons.filter(person => {

    const personLowercase = person.name.toLowerCase();
    const filterLowercase = filter.toLowerCase();

    return personLowercase.includes(filterLowercase)
  });

  // handle input
  const handleNamechange = () => {
    console.log(event.target.value ) 
    setNewName(event.target.value)
    console.log('newName', newName)
  }

  const handleNumberChange = () => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // handle sbmit
  const addPhone = (event) => {
    event.preventDefault()

    const payload = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const isExsist = persons.some(person => person.name === newName)

    if (isExsist) {
      alert(`${newName} alredy exist`)
      return ;
    }
    setPersons(persons.concat(payload))
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        handleFilter={handleFilter}
        filter={filter}
      />

      <h3>Add a new number</h3>

      <PersonForm
        addPhone={addPhone}
        handleNamechange={handleNamechange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <div>
        {personsToShow.map(person => 
          <Person
            key={person.id}
            person={person}
          />
        )}
      </div>
    </div>
  )

}

export default App