const PersonForm = ({addPhone, handleNamechange, handleNumberChange, newName, newNumber}) => {
  return (
    <div>
         <form onSubmit={addPhone}>
            <div>
                name: <input 
                onChange={handleNamechange}
                value={newName}/>
            </div>
            <div>
                number: 
                <input
                    onChange={handleNumberChange}
                    value={newNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    </div>
  )
}

export default PersonForm