import React, { useMemo } from "react";
import { useSearchQuery, useDrinkInfo } from "../../hooks";
import ingredients from "../../utils/ingredients";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { linkStyles } from "./styles";

const Suggestion = ({ type }) => {
  const { setSearchQuery } = useSearchQuery();
  const { toggleDrinkInfoOff } = useDrinkInfo();

  const getIngredient = type => {
    const min = 0;
    const max = ingredients[type].length;
    return ingredients[type][Math.floor(Math.random() * (max - min)) + min];
  };

  const ingredient = useMemo(() => getIngredient(type), []);

  const reset = () => {
    setSearchQuery(`${ingredient}`);
    toggleDrinkInfoOff();
  };

  return (
    <span
      css={linkStyles}
      onClick={reset}
      data-testid="suggestion"
      role="button"
    >
      {ingredient}
    </span>
  );
};

export default Suggestion;
