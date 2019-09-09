import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../src/components/App/App";
import store from "../src/store";

beforeEach(cleanup);

const Application = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

describe("<App />", () => {
  it("renders the application and without violations", () => {
    const { queryByTestId, container } = render(<Application />);

    axe(container).then(results => {
      expect(queryByTestId("application")).toBeTruthy();
      expect(results).toHaveNoViolations();
    });
  });
});
