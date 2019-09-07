import React from "react";
import { useSidebar, useSearchQuery, useDrinkInfo } from "../../hooks";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { burgerStyles, buttonStyles, linkStyles } from "./styles";

const Burger = () => {
  const { handleSidebar } = useSidebar();

  return (
    <div css={buttonStyles} onClick={handleSidebar}>
      <div css={burgerStyles} />
      <div css={burgerStyles} />
      <div css={burgerStyles} />
    </div>
  );
};

export default Burger;
