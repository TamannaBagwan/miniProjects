import React, { useContext, useState } from "react";
import { questions } from "../constants/questions";
import { QuizContext } from "../context/quizContext";

const Quiz = () => {
  const { setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (letter) => {
    if (!showAnswer) {
      setOptionChosen(letter);
      setShowAnswer(true);

      if (letter === questions[currentQuestion].answer) {
        setScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => {
        if (currentQuestion === questions.length - 1) {
          setGameState("endScreen");
        } else {
          setCurrentQuestion((prev) => prev + 1);
          setOptionChosen("");
          setShowAnswer(false);
        }
      }, 1500);
    }
  };

  return (
    <div className="quiz">
      <h3 className="question">{questions[currentQuestion].prompt}</h3>

      <div className="options">
        {["A", "B", "C", "D"].map((letter) => {
          const isCorrect = questions[currentQuestion].answer === letter;
          const isWrong = optionChosen === letter && !isCorrect;

          return (
            <button
              key={letter}
              className={`option-btn 
                ${showAnswer && isCorrect ? "correct" : ""} 
                ${showAnswer && isWrong ? "wrong" : ""}`}
              disabled={showAnswer}
              onClick={() => handleOptionClick(letter)}
            >
              {questions[currentQuestion][`option${letter}`]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
