/* eslint-disable react/prop-types */
import Person from "./Person";

const Persons = ({ namesToShow, deletePerson }) => {
  return (
    <div>
      {namesToShow.map((person) => (
        <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
      ))}
    </div>
  );
};

export default Persons;
