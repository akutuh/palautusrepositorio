/* eslint-disable react/prop-types */
import { useState } from "react"

const Button = ({ handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const App = () => {
  //tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics value={good} text='good' />
      <Statistics value={neutral} text='neutral'/>
      <Statistics value={bad} text='bad'/>
    </div>
  )
}

export default App