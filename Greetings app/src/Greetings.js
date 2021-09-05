
import React from 'react';
import './style.css';
function Greetings()
{

    let curDate = new Date();
    curDate = curDate.getHours();

    let greetings = '';
     if(curDate>=1 && curDate<12){
      greetings='good morning';
    }
     else if(curDate>=12 && curDate<18){
      greetings='good afternoon';
      }
      else{
       greetings='good night';
     }


  return (
    <>

    <div className="greetings">
    
       <h2>This is my dynamic greetings project</h2><br></br>
       <h2>It work based on your pc current time</h2><br></br><br></br>

       <div className="greetings-main">
         <h1>{greetings}</h1>
   
       </div>


    </div>
     
   </>
  );
}

export default Greetings;