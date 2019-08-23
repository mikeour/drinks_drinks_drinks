import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const burgerStyles = css`
  width: 19px;
  height: 3px;
  background-color: black;
  margin: 1px 0;
`;

export default ({ handleSidebar }) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          opacity: 0.7;
          transition: 0.7s linear;

          :hover {
            opacity: 1;
            transform: scale(1.085, 1.085);
          }
        `}
        onClick={handleSidebar}
      >
        <div css={burgerStyles} />
        <div css={burgerStyles} />
        <div css={burgerStyles} />
      </div>
    </>
  );
};
