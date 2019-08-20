import React, { useCallback, useMemo } from "react";
import Card from "./Card";
import HappyHour from "../assets/happyhour.gif";
import HappyHour2 from "../assets/happyhour1.gif";
import HappyHour3 from "../assets/happyhour2.gif";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { link } from "fs";

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

  const ingredient = useCallback(() => {
    const ingredients = ["rum", "gin", "vodka", "whiskey", "vermouth"];
    const min = 0;
    const max = ingredients.length;
    return ingredients[Math.floor(Math.random() * (max - min)) + min];
  }, [cocktails]);

  const ingredient1 = ingredient();
  const ingredient2 = ingredient();
  const ingredient3 = ingredient();

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
            <em>Curious? </em>Try searching for
            <span onClick={() => updateSearch(`${ingredient1}`)}>
              {" "}
              <strong css={linkStyles}>{ingredient1}</strong>
            </span>
            ,
            <span onClick={() => updateSearch(`${ingredient2}`)}>
              {" "}
              <strong css={linkStyles}>{ingredient2}</strong>
            </span>
            ,
            <span onClick={() => updateSearch(`${ingredient3}`)}>
              {" or "}
              <strong css={linkStyles}>{ingredient3}</strong>
            </span>
            , ...
          </h3>
        </>
      ) : null}
      {cocktails && cocktails.map(props => <Card {...props} />)}
    </main>
  );
};
