/* eslint-disable react/prop-types */
const Person = ({ name, number }) => {
  return (
    <div>
      <p>
        {name} {number}
      </p>
    </div>
  );
};

export default Person;
