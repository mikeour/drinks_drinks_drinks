import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App/App";

const Application = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const mountNode = document.getElementById("root");

render(<Application />, mountNode);
