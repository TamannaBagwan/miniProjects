import { useContext } from 'react';
import {QuizContext} from '../context/quizContext.jsx' ;
import '../App.css'

const MainMenu=()=>{
  const {setGameState} = useContext(QuizContext)
    return(
        <div className='menu'>
          <h1>Welcome to the Quiz!</h1>
          <button onClick={()=>setGameState('quiz')}> Start Quiz </button>
        </div>
    )
}

export default MainMenu;