import React from 'react'
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
  return (
    <div>
        <NavLink
            to="/home"
            exact
            style={linkStyles}
            activeStyle={{background: "white"}}
        >
            Home
        </NavLink>
        
        <NavLink
            to="/physicalactivity" 
            exact
            style={linkStyles}
            activeStyle={{background: "white"}}
        >
            Physical Activity
        </NavLink>

        <NavLink
            to="/affirmations" 
            exact
            style={linkStyles}
            activeStyle={{background: "white"}}
        >
            Affirmations
        </NavLink>

        <NavLink
         to="/newaffirmation" 
         exact
         style={linkStyles}
         activeStyle={{background: "white"}}
         >
            New Affirmation
        </NavLink>
        
    </div>
         
     
    
   
  )
}

export default NavBar