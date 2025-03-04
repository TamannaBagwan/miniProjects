
import React, { useContext } from "react";
import { QuizContext } from "../context/quizContext.jsx";
import "../App.css";
import { questions } from "../constants/questions.jsx";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("quiz");
  };

  const percentage = ((score / questions.length) * 100);

  let message = "Good attempt! Try again to improve.";
  if (percentage === "100.00") message = "Excellent! You got everything right!";
  else if (percentage >= 80) message = "Great job! Almost perfect!";
  else if (percentage < 50) message = "Keep practicing! You can do better!";

  return (
    <div className="endscreen">
      <h1>Quiz Finished 🎉</h1>
      <h3>
        You scored {score} / {questions.length}
      </h3>
      <p>{message}</p>
      <button onClick={restartQuiz} className="restart-btn">Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
