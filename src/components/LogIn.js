import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LogIn({ setIsLoggedIn }) {
    const navigate = useNavigate(); // Replace 'history' with 'navigate'
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setIsLoggedIn(true);
  
      navigate("/home"); // Use 'navigate' instead of 'history.push'
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
