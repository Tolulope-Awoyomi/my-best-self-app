import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import PhysicalActivity from "./PhysicalActivity";
import AffirmationList from "./AffirmationList";
import NavBar from "./NavBar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App" + (isDarkMode ? "dark" : "light")}>
      <NavBar setIsLoggedIn={setIsLoggedIn}/>
      <Switch>
        <Route exact path="/header">
          <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route>
          <PhysicalActivity exact path="/physicalactivity"/>
        </Route>
        <Route>
        <AffirmationList />
        </Route>
        <Route>
          <AffirmationDetail exact path="/affirmations"/>
        </Route>
        <Route>
          <AffirmationForm exact path="/newaffirmation"/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
