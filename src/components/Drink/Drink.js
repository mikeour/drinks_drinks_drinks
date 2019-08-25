import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  gridStyles,
  backButtonStyles,
  leftGridStyles,
  middleGridStyles,
  prevDrinkButtonStyles,
  drinkThumbnailStyles
} from "./styles";

const useDrinkInfo = () => {
  const dispatch = useDispatch();
  const drink = useSelector(state => state.drink.drink);
  const nextDrink = useSelector(state => state.drink.nextDrink);
  const prevDrink = useSelector(state => state.drink.prevDrink);
  const redirect = useSelector(state => state.drink.redirect);

  return {
    drink,
    nextDrink,
    prevDrink,
    redirect,
    setDrink: payload => dispatch({ type: "UPDATE_DRINK", payload }),
    setNextDrink: payload => dispatch({ type: "UPDATE_NEXT_DRINK", payload }),
    setPrevDrink: payload => dispatch({ type: "UPDATE_PREV_DRINK", payload }),
    setRedirect: () => dispatch({ type: "UPDATE_REDIRECT" })
  };
};

const Drink = ({ location, cocktails, setCocktails, setSearchQuery }) => {
  const drinkID = location.pathname.split("/")[2];
  const {
    drink,
    nextDrink,
    prevDrink,
    redirect,
    setDrink,
    setNextDrink,
    setPrevDrink,
    setRedirect
  } = useDrinkInfo();

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
    setSearchQuery(ingredient.toLowerCase());
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div css={gridStyles}>
        <div
          css={css`
            position: absolute;
          `}
        >
          <Link css={backButtonStyles} to="/">
            Back
          </Link>
        </div>
        <div css={leftGridStyles}>
          {prevDrink && (
            <Link
              css={prevDrinkButtonStyles}
              to={`/drink/${prevDrink.idDrink}`}
            >
              <span>Previous Drink: {prevDrink.strDrink}</span>
            </Link>
          )}
        </div>

        <div css={middleGridStyles}>
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
          <img css={drinkThumbnailStyles} src={drink.strDrinkThumb} />
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
            border-left: 1px solid black;
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

export default Drink;
