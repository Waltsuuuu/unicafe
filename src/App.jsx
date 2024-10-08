import { useState } from "react";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Statistics from "./Components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeedback = good + neutral + bad;

  const average = allFeedback > 0 ? (good - bad) / allFeedback : 0;
  // Laske keskiarvo: (good * 1 + neutral * 0 + bad * -1) / allFeedback
  // Keskiarvo lasketaan kaavalla (good - bad) / allFeedback, mikä tarkoittaa,
  // että hyvä palaute on arvoltaan 1, neutraali 0 ja huono -1.

  const positivePercentage = allFeedback > 0 ? (good / allFeedback) * 100 : 0;
  // Prosenttiosuus lasketaan kaavalla (good / allFeedback) * 100.

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <Header text={"give feedback"} />
      <Button handleClick={handleGood} text={"Good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"Bad"} />
      <Header text={"statistics"} />
      {allFeedback > 0 ? (
        <>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            allFeedback={allFeedback}
            average={average}
            positivePercentage={positivePercentage}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
