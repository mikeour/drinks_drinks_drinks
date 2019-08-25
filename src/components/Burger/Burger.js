import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { burgerStyles, buttonStyles } from "./styles";

const Burger = ({ handleSidebar }) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: row;
      `}
    >
      <div css={buttonStyles} onClick={handleSidebar}>
        <div css={burgerStyles} />
        <div css={burgerStyles} />
        <div css={burgerStyles} />
      </div>
      <div
        css={css`
          position: absolute;
          left: 4rem;
          width: 250px;
          align-self: center;
          font-size: 1.4rem;
        `}
      >
        <strong>Drinks, Drinks, Drinks</strong>
      </div>
    </div>
  );
};

export default Burger;
