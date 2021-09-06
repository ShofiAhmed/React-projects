import React, { useState } from 'react';
import Popup from './Popup';
import './style.css';
 
function Popupcontrol() {
  const [showPopup, setShowPopup] = useState(false);
 
  const popupWindow = () => {
    setShowPopup(!showPopup);
  }
 
  return <div>
    <input
      type="button"
      value="Open Popup"
      onClick={popupWindow}
    />
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
         survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
       
                     
    {showPopup && <Popup
      content={<>
        <h1>Filup the form</h1>
        <form>
           <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input><br></br>

          <label for="lname">Last Name</label>
           <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input><br></br>

           <input type="submit" value="Submit"></input>

        </ form>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

                     
      </>}
      handleClose={popupWindow}
    />}
  </div>
}
 
export default Popupcontrol;