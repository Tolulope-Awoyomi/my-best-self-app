import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import PhysicalActivity from "./PhysicalActivity";
import AffirmationList from "./AffirmationList";
import AffirmationDetail from "./AffirmationDetail";
import AffirmationForm from "./AffirmationForm";
import NavBar from "./NavBar";

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
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/physicalactivity" component={PhysicalActivity} />
        <Route exact path="/affirmations" component={AffirmationDetail} />
        <Route exact path="/newaffirmation" component={AffirmationForm} />
      </Switch>
    </div>
  );
}

export default App;
