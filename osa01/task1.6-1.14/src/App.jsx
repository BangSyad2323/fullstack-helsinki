import { useState } from 'react'

const Button = (props) => {
  return(
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} : {props.value}</p>
    </div>
  )
}

const Statistic = (props) => {

  if (props.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <h1>Statistic</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positif" value={props.positive} />
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

  const addgood = () => {
    setGood(good + 1);
  }
  const addneutral = () => {
    setNeutral(neutral + 1);
  }
  const addbad = () => {
    setBad(bad + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>

    

      <Button  onClick={addgood} text="good"/>
      <Button  onClick={addneutral} text="neutral"/>
      <Button  onClick={addbad} text="bad"/>

      <Statistic good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App