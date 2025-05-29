import React from "react";

const TimerButtons = ({ switchTimer, setActiveButton, activeButton }) => (
  <div className="timerButtons">
    <button
      className={`btn normalButton ${
        activeButton === "normal" ? "active" : ""
      }`}
      onClick={() => {
        setActiveButton("normal");
        switchTimer("normal");
      }}
    >
      Normal
    </button>
    <button
      className={`btn shortButton ${activeButton === "short" ? "active" : ""}`}
      onClick={() => {
        setActiveButton("short");
        switchTimer("short");
      }}
    >
      Short Break
    </button>

    <button
      className={`btn longButton ${activeButton === "long" ? "active" : ""}`}
      onClick={() => {
        setActiveButton("long");
        switchTimer("long");
      }}
    >
      Long Breaks
    </button>
  </div>
);

export default TimerButtons;
