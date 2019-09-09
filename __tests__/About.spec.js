import React from "react";
import { render, cleanup } from "@testing-library/react";
import About from "../src/components/About/About";

beforeEach(cleanup);

describe("<About />", () => {
  it("renders successfully", () => {
    const { queryByTestId } = render(<About />);

    expect(queryByTestId("about")).toBeTruthy();
  });
});
