import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "./redux/store/configuration";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "../app/router";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>,
  document.querySelector("#PatrykSitko")
);
