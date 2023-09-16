/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Persons from "./components/Persons"
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some((p) => p.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personToFind = persons.find(p => p.name === newName)
        personService
        .updatePerson(nameObject, personToFind.id)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personToFind.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id) => {
    console.log(id)
    const person = persons.find(p => p.id === id)
    console.log('asd', person)
    if(window.confirm(`Delete ${person.name}?`)) {
      personService
      .deletePerson(id)
      .then(response => {
        console.log(`delete succesful ${response.status}`)
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(`${person.name} has already been deleted`)
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filterSubmit = (event) => {
    event.preventDefault()
  }

  const namesToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLocaleLowerCase().includes(filter)
        )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterSubmit={filterSubmit}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
