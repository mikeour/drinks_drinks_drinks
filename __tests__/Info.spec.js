import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Info from "../src/components/Info/Info";

beforeEach(cleanup);

jest.mock("../src/hooks/index.js", () => ({
  useDrinkInfo: jest.fn(() => ({
    toggleDrinkInfoOff: jest.fn(),
    drink: {
      strDrink: "Negroni"
    }
  })),
  useSearchQuery: jest.fn(() => ({
    setSearchQuery: jest.fn()
  }))
}));

describe("<Info />", () => {
  it("renders", () => {
    const { queryByTestId } = render(<Info />);

    expect(queryByTestId("info")).toBeTruthy();
    fireEvent.click(queryByTestId("close"));
  });
});
