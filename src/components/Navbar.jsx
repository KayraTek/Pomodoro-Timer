import React, { useState } from "react";
import PopupComp from "./PopupComp";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Timer Project</h1>
        </div>
        <div className="selectionButtons">
          <button className="menuButton" onClick={togglePopup}>Report</button>
          <button className="menuButton" onClick={togglePopup}>Settings</button>
          <button className="menuButton" onClick={togglePopup}>Sign in</button>
          <button className="menuButton" onClick={togglePopup}>---</button>
        </div>
      </div>

      {isPopupOpen && <PopupComp togglePopup={togglePopup} />}
    </>
  );
};

export default Navbar;
