import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [hr, sethr] = useState(0);
  const [start, setStart] = useState(false);
  const toHandleReset = () => {
    setsec(0);
    sethr(0);
    setmin(0);
  };
  useEffect(() => {
    if (min == 60) {
      setmin(0);
      sethr(hr + 1);
    }
    if (sec == 60) {
      setsec(0);
      setmin(min + 1);
    }
    if (start) {
      setTimeout(() => {
        setsec((prev) => prev + 1);
      }, 1000);
    }
  }, [sec, start]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "90px",
          width: "180px",
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: "yellow",
        }}
      >
        <div style={{ marginTop: "12px" }}>
          <span
            style={{
              border: "1px solid black",
              backgroundColor: "yellowgreen",
              padding: "2px",
            }}
          >
            {hr}
          </span>{" "}
          hr{" "}
          <span
            style={{
              border: "1px solid black",
              backgroundColor: "yellowgreen",
              padding: "2px",
            }}
          >
            {min}
          </span>{" "}
          min{" "}
          <span
            style={{
              border: "1px solid black",
              backgroundColor: "yellowgreen",
              padding: "2px",
            }}
          >
            {sec}
          </span>{" "}
          sec
        </div>
        <div style={{ marginTop: "12px" }}>
          <button
            onClick={() => setStart(true)}
            style={{ backgroundColor: "orange" }}
          >
            Start
          </button>{" "}
          <button
            onClick={() => setStart(false)}
            style={{ backgroundColor: "greenyellow" }}
          >
            Pause
          </button>{" "}
          <button
            onClick={toHandleReset}
            style={{ backgroundColor: "blueviolet" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default StopWatch;