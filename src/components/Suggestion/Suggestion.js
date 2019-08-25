import React, { useMemo } from "react";
import { useSearchQuery } from "../App/App";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { linkStyles } from "./styles";

const Suggestion = () => {
  const { setSearchQuery } = useSearchQuery();

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

  return (
    <span onClick={() => setSearchQuery(`${ingredient}`)}>
      <strong css={linkStyles}>{ingredient}</strong>
    </span>
  );
};

export default Suggestion;
