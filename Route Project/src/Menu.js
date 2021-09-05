
import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
      <>
        <div className="menu">
        <h1>Rocky</h1>

        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="contact">Contact</NavLink>

        </div>
        
      </>
         
    );
  }
export default Menu;