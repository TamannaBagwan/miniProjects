import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1)
        }, 1000)
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false)
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (time) => {
        const pad = (num) => (num < 10 ? `0${num}` : num);
        const seconds = pad(time % 60);
        const minutes = pad(Math.floor(time / 60));
        return `${minutes}:${seconds}`;
    }

    return (
        <div>
            <h1> Stopwatch </h1>
            <h3> {formatTime(elapsedTime)} </h3>
            {!isRunning ? (<button onClick={startTimer}>Start</button>) : <button onClick={stopTimer}>Stop</button>}
            <button onClick={resetTimer}> Reset </button>
        </div>
    )
}

export default Stopwatch
