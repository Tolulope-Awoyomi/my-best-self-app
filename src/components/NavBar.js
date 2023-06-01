import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "var(--cyan)",
    textDecoration: "none",
    color: "black",
  };

function NavBar({ setIsLoggedIn }) {
    const navigate = useNavigate();
  
    function handleLogout() {
      setIsLoggedIn(false);
      navigate("/login");
    }

  return (
    <div>
        <NavLink
            to="/home"
            exact
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Home
        </NavLink>
        
        <NavLink
            to="/physicalactivity" 
            exact
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Physical Activity
        </NavLink>

        <NavLink
            to="/affirmations" 
            exact
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Affirmations
        </NavLink>

        <NavLink
            to="/explore" 
            exact
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Explore!
        </NavLink>

        <NavLink
            to="/login" 
            exact 
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            LogIn
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
    </div>
         
     
    
   
  )
}

export default NavBar