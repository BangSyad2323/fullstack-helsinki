import { useState } from 'react'

// components
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  console.log('persons', persons)

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