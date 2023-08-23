/* eslint-disable react/prop-types */
const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((crse) => (
        <Part course={crse} key={crse.id} />
      ))}
      <Total parts={course.parts} />
    </div>
  );
};

const Part = ({ course }) => {
  return (
    <>
      <p>
        {course.name} {course.exercises}
      </p>
    </>
  );
};

const Total = ({ parts }) => {
  const allExercises = parts.reduce((sum, part) => {
    console.log("sum+part", sum, part);
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <b>total of {allExercises} exercises</b>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
