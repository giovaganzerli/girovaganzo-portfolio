import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

// IMPORT CSS ANIMATION
import 'animate.css';
// IMPORT MAIN STYLESHEET
import "./App.scss";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;