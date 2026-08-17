import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  console.log('persons', persons)

  const handlePhonechange = () => {
    console.log(event.target.value ) 
    setNewName(event.target.value)
    console.log('newName', newName)
  }

  const addPhone = (event) => {
    event.preventDefault()

    const payload = {
      name: newName
    }
    setPersons(persons.concat(payload))

    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input 
          onChange={handlePhonechange}
          value={newName}/>
        </div>
        <div>
          debug {newName}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person =>
          <p>{person.name}</p>
      )}</div>
    </div>
  )

}

export default App