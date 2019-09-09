import React from "react";
import { render, cleanup } from "@testing-library/react";
import Spinner from "../src/components/Spinner/Spinner";

beforeEach(cleanup);

describe("<Spinner />", () => {
  it("renders successfully", () => {
    const { queryByTestId } = render(<Spinner />);

    expect(queryByTestId("spinner")).toBeTruthy();
  });
});
