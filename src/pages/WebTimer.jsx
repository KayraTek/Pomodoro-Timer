import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TimerButtons from "../components/TimerButtons";
import CountdownDisplay from "../components/CountdownDisplay";
import StartButton from "../components/StartButton";

const WebTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [activeButton, setActiveButton] = useState("normal");
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };
  // Ekleme Yapilabilir. Istege Bagli.
  // const pauseTimer = () => {
  //   setPause(true);
  // };
  
  const switchTimer = (type) => {
    setIsRunning(false);
    if (type === "normal") setTimeLeft(25 * 60);
    if (type === "short") setTimeLeft(5 * 60);
    if (type === "long") setTimeLeft(15 * 60);
  };

  return (
    <div className="gradient-animate">
      <div className="activeBgColor"></div>
      <Navbar />
      <hr className="solid" style={{ width: "35%", opacity: 0.5 }} />
      <div className="bodyMainDiv">
        <div className="timerMiddleDiv">
          <TimerButtons
            switchTimer={switchTimer}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          <CountdownDisplay timeLeft={timeLeft} />
          <StartButton
            isRunning={isRunning}
            startTimer={startTimer}
            stopTimer={stopTimer}
          />
        </div>
      </div>
    </div>
  );
};

export default WebTimer;
