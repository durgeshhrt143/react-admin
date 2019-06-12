import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./login-form";
import TwoStepverification from "./two-step-verification";

import Home from "../pages/home";
const Authentication = props => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginForm} />
      <Route path="/two-step-verification" component={TwoStepverification} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Authentication;
