import React from "react";
import { useState, useEffect } from "react";
const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainigTime] = useState(timeout);
  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  useEffect(() => {
    console.log("SETTING INTERVEL");
    const interval = setInterval(() => {
      setRemainigTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <progress id="question-time"
       max={timeout}
       value={remainingTime} 
       className={mode}/>
    </div>
  );
};

export default QuestionTimer;
