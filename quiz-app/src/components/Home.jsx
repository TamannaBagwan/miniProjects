import React, { useState } from "react";
import MainMenu from "./MainMenu.jsx";
import Quiz from "./Quiz.jsx";
import EndScreen from "./EndScreen.jsx";
import { QuizContext } from "../context/quizContext.jsx";

const Home = () => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
};

export default Home;
