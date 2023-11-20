import React, { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSlected = selectedAnswer === answer;
          let cssClass = "";
          if (answerState === "answered" && isSlected) {
            cssClass = "selected";
          }
          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSlected
          ) {
            cssClass = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
