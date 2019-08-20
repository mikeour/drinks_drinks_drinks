import React, { useCallback, useMemo } from "react";
import Card from "./Card";
import HappyHour from "../assets/happyhour.gif";
import HappyHour2 from "../assets/happyhour1.gif";
import HappyHour3 from "../assets/happyhour2.gif";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const showLoading = css`
  grid-area: grid;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  grid-gap: 10px;
  overflow-y: auto;
`;

const hideLoading = css`
  position: relative;
  text-align: center;
`;

const linkStyles = css`
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

export default ({ cocktails, updateSearch, searchQuery }) => {
  const image = useMemo(() => {
    const images = [HappyHour, HappyHour2, HappyHour3];
    const min = 0;
    const max = images.length;
    return images[Math.floor(Math.random() * (max - min)) + min];
  }, []);

  const getIngredient = useCallback(() => {
    const ingredients = [
      "rum",
      "gin",
      "vodka",
      "whiskey",
      "vermouth",
      "scotch",
      "mezcal"
    ];
    const min = 0;
    const max = ingredients.length;
    return ingredients[Math.floor(Math.random() * (max - min)) + min];
  }, []);

  const ingredient1 = useMemo(() => {
    const ingredient = getIngredient();
    return (
      <span onClick={() => updateSearch(`${ingredient}`)}>
        {" "}
        <strong css={linkStyles}>{ingredient}</strong>
      </span>
    );
  }, []);
  const ingredient2 = useMemo(() => {
    const ingredient = getIngredient();
    return (
      <span onClick={() => updateSearch(`${ingredient}`)}>
        {" "}
        <strong css={linkStyles}>{ingredient}</strong>
      </span>
    );
  }, []);
  const ingredient3 = useMemo(() => {
    const ingredient = getIngredient();
    return (
      <span onClick={() => updateSearch(`${ingredient}`)}>
        {" "}
        <strong css={linkStyles}>{ingredient}</strong>
      </span>
    );
  }, []);

  return (
    <main css={cocktails.length <= 0 ? hideLoading : showLoading}>
      {cocktails.length <= 0 ? (
        <>
          <img
            css={css`
              width: 250px;
              height: 250px;
              opacity: 0.65;
            `}
            src={image}
          />
          <h3
            css={css`
              padding: 15px;
            `}
          >
            <em>Curious? </em>Try searching for {ingredient1}, {ingredient2}, or{" "}
            {ingredient3}
          </h3>
        </>
      ) : null}
      {cocktails &&
        cocktails.map(props => <Card key={props.idDrink} {...props} />)}
    </main>
  );
};
