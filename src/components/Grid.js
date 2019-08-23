import React, { useMemo } from "react";
import Card from "./Card";
import Suggestion from "./Suggestion";
import HappyHour from "../assets/happyhour.gif";
import HappyHour2 from "../assets/happyhour1.gif";
import HappyHour3 from "../assets/happyhour2.gif";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const showLoading = css`
  grid-area: grid;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  padding: 50px;
  grid-gap: 14px;
  overflow-y: auto;
`;

const hideLoading = css`
  position: relative;
  text-align: center;
`;

export default ({ cocktails, setSearchQuery }) => {
  const image = useMemo(() => {
    const images = [HappyHour, HappyHour2, HappyHour3];
    const min = 0;
    const max = images.length;
    return images[Math.floor(Math.random() * (max - min)) + min];
  }, []);

  const memoIngredient1 = useMemo(
    () => <Suggestion setSearchQuery={setSearchQuery} />,
    []
  );
  const memoIngredient2 = useMemo(
    () => <Suggestion setSearchQuery={setSearchQuery} />,
    []
  );
  const memoIngredient3 = useMemo(
    () => <Suggestion setSearchQuery={setSearchQuery} />,
    []
  );

  return (
    <main css={cocktails.length <= 0 ? hideLoading : showLoading}>
      {cocktails.length <= 0 ? (
        <>
          <img
            css={css`
              width: 250px;
              height: 250px;
              opacity: 0.45;
              margin-top: 100px;
              margin-left: 10px;
              animation-delay: 0.5s;
              animation-duration: 2s;
              animation-iteration-count: 0.25;
            `}
            className="animated shake"
            src={image}
          />
          <h3
            css={css`
              padding: 25px;
            `}
          >
            <em>Need some inspiration? </em>
            <br />
            <br />
            Try searching for {memoIngredient1}, {memoIngredient2}, or maybe
            {"  "}
            {memoIngredient3} ...
          </h3>
        </>
      ) : null}
      {cocktails &&
        cocktails.map(props => <Card key={props.idDrink} {...props} />)}
    </main>
  );
};
