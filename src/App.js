import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./pages/home/home.view";

// IMPORT CSS ANIMATION
import 'animate.css';
// IMPORT MAIN STYLESHEET
import "./App.scss";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;