import { useState } from 'react'
import Header from './Components/Header'
import Button from './Components/Button'
import Statistics from './Components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)

  const handleGood = () => {
    setAllFeedback(allFeedback + 1)
    const updatedGood = good + 1
    setGood(updatedGood)
  }
  const handleNeutral = () => {
    setAllFeedback(allFeedback + 1)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const handleBad = () => {
    setAllFeedback(allFeedback + 1)
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <>
      <Header text={'give feedback'}/>
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>
      <Header text={'statistics'} />
      <Statistics label={'good'} stats={good}/>
      <Statistics label={'neutral'} stats={neutral}/>
      <Statistics label={'bad'} stats={bad}/>
      <Statistics label={'all'} stats={allFeedback}/>      
    </>
  )
}

export default App
