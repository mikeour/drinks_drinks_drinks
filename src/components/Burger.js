import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const buttonStyles = css`
  display: inline-flex;
  flex-direction: column;
  opacity: 0.7;
  transition: 0.7s linear;

  :hover {
    opacity: 1;
    transform: scale(1.085, 1.085);
  }
`;

const burgerStyles = css`
  width: 19px;
  height: 3px;
  background-color: black;
  margin: 1px 0;
`;

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
