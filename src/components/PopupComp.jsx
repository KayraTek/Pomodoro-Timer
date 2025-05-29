import React from 'react'
import '../style.css'

const PopupComp = ({togglePopup}) => {
  return (
   <div className="overlay">
      <div className="overlay-content">
        <h2>ÇOK YAKINDA AKTİF!</h2>
        <p><b>Butonlarımız şu an test aşamasındadır. Yakında aktif olacaktır.</b></p>
        <button className='close-popup' onClick={togglePopup}>Close</button>
      </div>
    </div>
  )
}

export default PopupComp;