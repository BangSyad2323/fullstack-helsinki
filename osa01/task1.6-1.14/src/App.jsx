import { useState } from 'react'

const Statistic = (props) => {

  if (props.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <h1>Statistic</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {props.average}</p>
      <p>positive: {props.positive}% </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const average = all / 3

  const positive = (good / all) * 100

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistic good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App