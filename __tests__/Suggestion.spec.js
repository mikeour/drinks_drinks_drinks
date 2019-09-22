import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Suggestion from "../src/components/Suggestion/Suggestion";

beforeEach(cleanup);

jest.mock("../src/hooks/index.js", () => ({
  useDrinkInfo: jest.fn(() => ({
    toggleDrinkInfoOff: jest.fn()
  })),
  useSearchQuery: jest.fn(() => ({
    setSearchQuery: jest.fn()
  }))
}));

describe("<Suggestion />", () => {
  it("should render a clickable span", () => {
    const { queryByTestId } = render(<Suggestion type="light" />);

    expect(queryByTestId("suggestion")).toBeTruthy();
    fireEvent.click(queryByTestId("suggestion"));
  });
});
