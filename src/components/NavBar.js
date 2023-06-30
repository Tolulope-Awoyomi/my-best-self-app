import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"; // v5 -> { NavLink, useHistory }

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "var(--cyan)",
    textDecoration: "none",
    color: "black",
  };

function NavBar({ setIsLoggedIn }) {
    const navigate = useNavigate(); // v5 -> const history = useHistory()
  
    function handleLogout() {
      setIsLoggedIn(false);
      navigate("/login"); // v5 -> history.push("/login")
    }

  return (
    <div>
        <NavLink
            to="/home"
            
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Home
        </NavLink>
        
        <NavLink
            to="/physicalactivity" 
            
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Physical Activity
        </NavLink>

        <NavLink
            to="/affirmations" 
            
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Affirmations
        </NavLink>

        <NavLink
            to="/explore" 
            
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Explore!
        </NavLink>

        <NavLink
            to="/login" 
             
            style={linkStyles}
            activestyle={{background: "white"}}
        >
            Log In
        </NavLink>
        
        <button onClick={handleLogout}>Logout</button>
    </div>
         
     
    
   
  )
}

export default NavBar