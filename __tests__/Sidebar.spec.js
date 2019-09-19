import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Sidebar from "../src/components/Sidebar/Sidebar";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../src/hooks/index.js", () => ({
  useSidebar: jest.fn(() => ({
    showSidebar: jest.fn()
  })),
  useSearchQuery: jest.fn(() => ({
    resetSearchQuery: jest.fn()
  }))
}));

beforeEach(cleanup);

describe("<Sidebar />", () => {
  it("renders with Home and About links", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText, queryByTestId } = render(
      <Router history={history}>
        <Sidebar />
      </Router>
    );

    expect(queryByTestId("sidebar")).toHaveTextContent(/home/i);
    expect(queryByTestId("sidebar")).toHaveTextContent(/about/i);
    fireEvent.click(getByText(/home/i));
    fireEvent.click(getByText(/about/i));
  });
});
