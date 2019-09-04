import React from "react";
import { Link } from "react-router-dom";
import { useSidebar, useSearchQuery, useDrinkInfo } from "../../hooks";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { burgerStyles, buttonStyles, linkStyles } from "./styles";

const Burger = () => {
  const { handleSidebar } = useSidebar();
  const { resetSearchQuery } = useSearchQuery();
  const { toggleDrinkInfoOff } = useDrinkInfo();

  const resetSearch = e => {
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
      <Link css={linkStyles} onClick={resetSearch} to="/">
        <strong>Drinks, Drinks, Drinks</strong>
      </Link>
    </div>
  );
};

export default Burger;
