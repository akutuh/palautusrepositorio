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
      <Total course={course} />
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

const Total = ({ course }) => {
  const allExercises = () => {
    let all = 0;
    course.parts.map((crse) => (all = all + crse.exercises));
    return all;
  };
  return (
    <div>
      <b>total of {allExercises()} exercises</b>
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
  const course = {
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
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
