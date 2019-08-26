import React, { useState, useEffect } from "react";
import { useDrinkInfo } from "../App/App";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { cardStyles, drinkNameStyles, imageStyles } from "./styles";

const Card = ({ strDrink, strDrinkThumb, idDrink }) => {
  const {
    showDrinkInfo,
    toggleDrinkInfoOff,
    toggleDrinkInfoOn
  } = useDrinkInfo();
  const [drink, setDrink] = useState({});

  const handleClick = e => toggleDrinkInfoOn();

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    fetch(url)
      .then(raw => raw.json())
      .then(({ drinks }) => {
        setDrink(drinks[0]);
      });
  }, []);

  return (
    <div css={cardStyles} onClick={handleClick}>
      <div css={drinkNameStyles}>
        <p
          css={css`
            font-size: 0.6rem;
          `}
        >
          Name:
        </p>
        {strDrink}
      </div>
      <div
        css={css`
          grid-area: details;
          padding-left: 1rem;
          align-self: center;
        `}
      >
        <p
          css={css`
            font-size: 0.6rem;
          `}
        >
          Served in:
        </p>
        {drink.strGlass}
      </div>
      <img css={imageStyles} src={strDrinkThumb} />
    </div>
  );
};

export default Card;
