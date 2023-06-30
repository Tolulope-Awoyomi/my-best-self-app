import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LogIn({ setIsLoggedIn }) {
    const navigate = useNavigate(); // v5 - const history = useHistory()
    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });
  
    function handleChange(e) {
      console.log(e.target.value)
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
    
      if (formData.username.length < 1 || formData.password.length < 1) {
        alert("Input your details please");
      } else {
        setIsLoggedIn(true);
        navigate("/home"); // v5 - 'history.push("/home")
      }
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LogIn;
