import { useState, useEffect } from "react";
import axios from "axios";

// components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Notification from "./components/Notification";

// service
import getAll from "./services/noteService";
import noteService from "./services/noteService";
import deletePhone from "./services/noteService";
import changePhone from "./services/noteService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  // filter
  const handleFilter = () => {
    setFilter(event.target.value);
    console.log("personsToShow", personsToShow);
  };

  // filter function
  const personsToShow = persons.filter((person) => {
    const personLowercase = person.name.toLowerCase();
    const filterLowercase = filter.toLowerCase();

    return personLowercase.includes(filterLowercase);
  });

  // handle input
  const handleNamechange = () => {
    console.log(event.target.value);
    setNewName(event.target.value);
    console.log("newName", newName);
  };

  const handleNumberChange = () => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  // handle sbmit
  const addPhone = (event) => {
    event.preventDefault();

    const payload = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is alredy added to phonebook, replace the old number with a new one`,
        )
      ) {
        const changePerson = { ...existingPerson, number: newNumber };
        noteService
          .changePhone(existingPerson.id, changePerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson,
              ),
            );
            setMessage({text: `changed number ${newName}`, isError: false})
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            "failed edit";
          });
      }
      return;
    }

    noteService.create(payload).then((data) => {
      setPersons(persons.concat(data));
      setMessage({text: `Added ${newName}`, isError: false});
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleDelete = (id, name) => {
    console.log(`tombol ${id} diklik`);
    if (window.confirm(`delete ${name}`)) {
      noteService
        .deletePhone(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id != id));
          alert("succes to delete note");
        })
        .catch((error) => {
          setMessage({text: `Information of${name} has alredy been remover from server`, isError: true})
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter handleFilter={handleFilter} filter={filter} />

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
        {personsToShow.map((person) => (
          <Person
            key={person.id}
            person={person}
            deletePerson={() => handleDelete(person.id, person.name)}
          />
        ))}
      </div>
    </div>
  );
};

// gatau kenapa handle delete masih eror

export default App;
