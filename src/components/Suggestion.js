import React, { useCallback, useMemo } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const linkStyles = css`
  text-decoration: underline;
  font-style: italic;

  :hover {
    cursor: pointer;
  }
`;

export default ({ updateSearch }) => {
  const getIngredient = useCallback(() => {
    const ingredients = [
      "rum",
      "gin",
      "tequila",
      "vodka",
      "whiskey",
      "scotch",
      "mezcal",
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
  }, []);

  const ingredient = getIngredient();

  return (
    <span onClick={() => updateSearch(`${ingredient}`)}>
      {" "}
      <strong css={linkStyles}>{ingredient}</strong>
    </span>
  );
};
