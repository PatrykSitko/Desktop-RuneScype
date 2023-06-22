import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";

document.title = "react app";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
  </Switch>
);
