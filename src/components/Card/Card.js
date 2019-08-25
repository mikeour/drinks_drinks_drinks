import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { cardStyles, drinkNameStyles, imageStyles } from "./styles";

const Card = ({ strDrink, strDrinkThumb, idDrink }) => {
  const [redirect, setRedirect] = useState(false);
  const [drink, setDrink] = useState({});

  const handleClick = e => setRedirect(true);

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    fetch(url)
      .then(raw => raw.json())
      .then(({ drinks }) => {
        console.log("have it", drinks[0]);
        setDrink(drinks[0]);
      });
  }, []);

  if (redirect) {
    return <Redirect to={`/drink/${idDrink}`} />;
  }

  return (
    <div css={cardStyles} onClick={handleClick}>
      <p css={drinkNameStyles}>
        <p
          css={css`
            font-size: 0.6rem;
          `}
        >
          Name:
        </p>
        {strDrink}
      </p>
      <p
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
      </p>
      <img css={imageStyles} src={strDrinkThumb} />
    </div>
  );
};

export default Card;
