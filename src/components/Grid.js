import React from "react";
import Card from "./Card";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cocktails }) => {
  return (
    <main
      css={css`
        grid-area: grid;
        border: 1px solid black;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 50px;
        grid-gap: 10px;
        overflow-y: auto;
      `}
    >
      {cocktails && cocktails.map(props => <Card {...props} />)}
    </main>
  );
};
