import React, { useMemo } from "react";
import { useSearchQuery, useDrinkInfo } from "../App/App";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { linkStyles } from "./styles";

const Suggestion = () => {
  const { setSearchQuery } = useSearchQuery();
  const { toggleDrinkInfoOff } = useDrinkInfo();

  const getIngredient = () => {
    const ingredients = [
      "rum",
      "gin",
      "tequila",
      "vodka",
      "whiskey",
      "scotch",
      "bourbon",
      "brandy",
      "cognac",
      "kahlua",
      "triple sec",
      "sweet vermouth",
      "dry vermouth"
    ];
    const min = 0;
    const max = ingredients.length;
    return ingredients[Math.floor(Math.random() * (max - min)) + min];
  };

  const ingredient = useMemo(() => getIngredient(), []);

  const reset = () => {
    setSearchQuery(`${ingredient}`);
    toggleDrinkInfoOff();
  };

  return (
    <span onClick={reset}>
      <strong css={linkStyles}>{ingredient}</strong>
    </span>
  );
};

export default Suggestion;
