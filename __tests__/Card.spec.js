import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "../src/components/Card/Card";
import fetchMock from "fetch-mock";
import "whatwg-fetch";

beforeEach(cleanup);

jest.mock("../src/hooks/index.js", () => ({
  useDrinkInfo: jest.fn(() => ({
    toggleDrinkInfoOff: jest.fn(),
    setDrink: jest.fn()
  }))
}));

describe("<Card />", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should render successfully", () => {
    const props = {
      strDrink: "Negroni",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
      idDrink: "11003"
    };
    const { queryByTestId } = render(<Card {...props} />);

    expect(queryByTestId("card")).toBeTruthy();
  });
});
