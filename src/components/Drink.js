import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ location, cocktails, updateSearch, setCocktails }) => {
  const [drink, setDrink] = useState({});
  const [nextDrink, setNextDrink] = useState({});
  const [prevDrink, setPrevDrink] = useState({});
  const [redirect, setRedirect] = useState(false);
  const drinkID = location.pathname.split("/")[2];

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
    fetch(url)
      .then(raw => raw.json())
      .then(({ drinks }) => {
        setDrink(drinks[0]);
      });
  }, [drinkID]);

  useEffect(() => {
    const index = cocktails.findIndex(
      cocktail => cocktail.idDrink === drink.idDrink
    );

    setNextDrink(cocktails[index + 1]);
    setPrevDrink(cocktails[index - 1]);
  }, [drink]);

  const handleRedirect = ingredient => {
    setCocktails([]);
    updateSearch(ingredient.toLowerCase());
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div
        css={css`
          display: grid;
          grid-template-areas: "left middle right";
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 1fr;
          height: 100%;
        `}
      >
        <div
          css={css`
            position: absolute;
          `}
        >
          <Link
            css={css`
              position: absolute;
              text-decoration: none;
              color: black;
              top: 30px;
              left: 30px;

              :visited {
                color: black;
              }
            `}
            to="/"
          >
            Back
          </Link>
        </div>
        <div
          css={css`
            grid-area: left;
            grid-column-start: 1;
            grid-column-end: 2;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          `}
        >
          {prevDrink && (
            <Link
              css={css`
                text-decoration: none;
                color: black;
                padding: 15px;
                text-align: center;
                border: 1px solid black;

                :visited {
                  color: black;
                }
              `}
              to={`/drink/${prevDrink.idDrink}`}
            >
              <span>Previous Drink: {prevDrink.strDrink}</span>
            </Link>
          )}
        </div>

        <div
          css={css`
            grid-area: middle;
            grid-column-start: 2;
            grid-column-end: 4;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;
          `}
        >
          <p>
            Drink name:{" "}
            <span
              css={css`
                font-size: 22px;
                padding: 5px 20px;
              `}
            >
              {drink.strDrink}
            </span>
          </p>
          <img
            css={css`
              width: 250px;
              height: 250px;
              border-radius: 50%;
              border: 1px solid black;
            `}
            src={drink.strDrinkThumb}
          />
          <p css={css``}>
            Instructions:{" "}
            <span
              css={css`
                font-size: 15px;
                padding: 5px 20px;
              `}
            >
              {drink.strInstructions}
            </span>
          </p>
        </div>
        <div
          css={css`
            grid-area: right;
            grid-column-start: 4;
            grid-column-end: 5;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          `}
        >
          {drink.strIngredient1 && (
            <div onClick={e => handleRedirect(drink.strIngredient1)}>
              {drink.strIngredient1}
            </div>
          )}
          {drink.strIngredient2 && (
            <div onClick={e => handleRedirect(drink.strIngredient2)}>
              {drink.strIngredient2}
            </div>
          )}
          {drink.strIngredient3 && (
            <div onClick={e => handleRedirect(drink.strIngredient3)}>
              {drink.strIngredient3}
            </div>
          )}
          {drink.strIngredient4 && (
            <div onClick={e => handleRedirect(drink.strIngredient4)}>
              {drink.strIngredient4}
            </div>
          )}
          {drink.strIngredient5 && (
            <div onClick={e => handleRedirect(drink.strIngredient5)}>
              {drink.strIngredient5}
            </div>
          )}
          {nextDrink && (
            <Link
              css={css`
                text-decoration: none;
                color: black;
                padding: 15px;
                text-align: center;
                border: 1px solid black;

                :visited {
                  color: black;
                }
              `}
              to={`/drink/${nextDrink.idDrink}`}
            >
              <span>Next Drink: {nextDrink.strDrink}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
