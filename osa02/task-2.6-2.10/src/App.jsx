import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '087777778787' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  console.log('persons', persons)

  const handleNamechange = () => {
    console.log(event.target.value ) 
    setNewName(event.target.value)
    console.log('newName', newName)
  }

  const handleNumberChange = () => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const addPhone = (event) => {
    event.preventDefault()

    const payload = {
      name: newName,
      number: newNumber
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
      <div>{persons.map(person =>
          <p>{person.name} {person.number}</p>
      )}</div>
    </div>
  )

}

export default App