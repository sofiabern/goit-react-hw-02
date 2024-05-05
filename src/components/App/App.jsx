import { useEffect, useState } from "react";

import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

function App() {


  const [feedback, setFeedback] = useState(() => {
    const data = JSON.parse(localStorage.getItem("saved-feedback"));
    if (!data)
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    return data;
  });

  const handleFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
  
  return (
    <>
      <Description />
      <Options
        onAdd={handleFeedback}
        onReset={handleReset}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          data={feedback}
          total={totalFeedback}
          percentage={positiveFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;
