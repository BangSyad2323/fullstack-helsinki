import { useState } from 'react'

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

      <p>filter shown with</p>

      <input 
        onChange={handleFilter}
        value={filter}
      />

      <div>
        filter: {filter}
      </div>
      
      <h3>Add a new number</h3>

      <form onSubmit={addPhone}>
        <div>
          name: <input 
          onChange={handleNamechange}
          value={newName}/>
        </div>
        <div>
          debug name {newName}
        </div>
        <div>
          number: 
          <input
            onChange={handleNumberChange}
            value={newNumber}
          />
        </div>
        <div>
          debug phone: {newNumber}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <div>{personsToShow.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
      )}
      </div>
    </div>
  )

}

export default App