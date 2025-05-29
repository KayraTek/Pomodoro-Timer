import React from 'react';

const StartButton = ({ isRunning, startTimer, stopTimer }) => (
  <div className="startButtonDiv">
    <button
      className="startButtonTimer"
      onClick={isRunning ? stopTimer : startTimer}
    >
      {isRunning ? 'SIFIRLA' : 'START'}
    </button>
  </div>
);

export default StartButton;
