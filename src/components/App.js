import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import PhysicalActivity from "./PhysicalActivity";
import AffirmationList from "./AffirmationList";
import NavBar from "./NavBar";
import Explore from "./Explore";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App" + (isDarkMode ? "dark" : "light")}>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/physicalactivity" element={<PhysicalActivity />} />
        <Route path="/affirmations" element={<AffirmationList />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
