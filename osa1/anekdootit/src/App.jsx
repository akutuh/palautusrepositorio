/* eslint-disable react/prop-types */
import { useState } from "react";

const Votes = ({ votes, selected }) => {
  return (
    <div>
      <p>has {votes[selected]} votes</p>
    </div>
  );
};

const MostVotes = ({ votes, anecdotes }) => {
  console.log(votes);
  const most = Math.max(...votes);
  return <div>{anecdotes[votes.indexOf(most)]}</div>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(7));

  const randomNumber = () => Math.floor(Math.random() * 7);

  const handleNextAnecdote = () => {
    setSelected(randomNumber());
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <div>
        <Votes votes={votes} selected={selected} />
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNextAnecdote}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
