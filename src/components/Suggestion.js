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

const Suggestion = ({ setSearchQuery }) => {
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
