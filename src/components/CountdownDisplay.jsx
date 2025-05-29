import React from 'react';

const CountdownDisplay = ({ timeLeft }) => {
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="timerDivArea">
      <h1 className="countDownTimer">{formatTime(timeLeft)}</h1>
    </div>
  );
};

export default CountdownDisplay;
