import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import BeginnerPage from "./BeginnerPage";
import AdvantagePage from "./AdvantagePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/beginner" component={BeginnerPage} />
      <Route exact path="/advantage" component={AdvantagePage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
