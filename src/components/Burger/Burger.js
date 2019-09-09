import React from "react";
import { useSidebar } from "../../hooks";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { buttonStyles, burgerStyles, pattyStyles } from "./styles";

const Burger = () => {
  const { handleSidebar } = useSidebar();

  return (
    <div css={buttonStyles}>
      <div css={burgerStyles} onClick={handleSidebar} data-testid="burger">
        <div css={pattyStyles} />
        <div css={pattyStyles} />
        <div css={pattyStyles} />
      </div>
    </div>
  );
};

export default Burger;
