import React from "react";
import { Link } from "react-router-dom";
import { useSidebar, useSearchQuery, useDrinkInfo } from "../App/App";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { burgerStyles, buttonStyles } from "./styles";

const Burger = () => {
  const { handleSidebar } = useSidebar();
  const { resetSearchQuery } = useSearchQuery();
  const { toggleDrinkInfoOff } = useDrinkInfo();

  const reset = e => {
    toggleDrinkInfoOff();
    resetSearchQuery();
  };

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
      <Link
        css={css`
          position: absolute;
          left: 4rem;
          width: 250px;
          align-self: center;
          font-size: 1.4rem;
          text-decoration: none;
          color: black;

          :visited {
            color: black;
          }
        `}
        onClick={reset}
        to="/"
      >
        <strong>Drinks, Drinks, Drinks</strong>
      </Link>
    </div>
  );
};

export default Burger;
