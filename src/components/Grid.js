import React from "react";
import Card from "./Card";
import HappyHour from "../happyhour.gif";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const showLoading = css``;

const hideLoading = css`
  grid-area: grid;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  grid-gap: 10px;
  overflow-y: auto;
`;

export default ({ cocktails }) => {
  return (
    <main css={cocktails ? hideLoading : showLoading}>
      {cocktails.length <= 0 ? (
        <img
          css={css`
            position: absolute;
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          `}
          src={HappyHour}
        />
      ) : null}
      {cocktails && cocktails.map(props => <Card {...props} />)}
    </main>
  );
};
