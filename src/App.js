import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";
import SingleWork from "./pages/SingleWork";

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
              <Route path="/works/:slug" component={SingleWork} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;