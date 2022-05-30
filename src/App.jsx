import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import WelcomePage from "./pages/WelcomePage";
import CityPage from "./pages/CityPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/city">
          <CityPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
