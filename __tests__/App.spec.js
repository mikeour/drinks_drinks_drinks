import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
const { axe, toHaveNoViolations } = require("jest-axe");
import App from "../src/components/App/App";
import store from "../src/store";
expect.extend(toHaveNoViolations);

beforeEach(cleanup);

const Application = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

describe("<App />", () => {
  it("renders the application", () => {
    const { queryByTestId } = render(<Application />);
    expect(queryByTestId("application")).toBeTruthy();
  });

  it("renders without violations", () => {
    const { container } = render(<Application />);
    axe(container).then(results => {
      expect(results).toHaveNoViolations();
    });
  });
});
