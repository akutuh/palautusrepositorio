/* eslint-disable react/prop-types */
const Header = ({ course }) => {
  return (
    <>
      <h2>{course.name}</h2>
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

export default Course;
