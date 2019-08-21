import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ handleSidebar }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        opacity: 0.7;
        transition: 0.7s linear;

        :hover {
          opacity: 1;
          transform: scale(1.1, 1.1);
        }
      `}
      onClick={handleSidebar}
    >
      <div
        css={css`
          width: 15px;
          height: 3px;
          background-color: black;
          margin: 1px 0;
        `}
      />
      <div
        css={css`
          width: 15px;
          height: 3px;
          background-color: black;
          margin: 1px 0;
        `}
      />
      <div
        css={css`
          width: 15px;
          height: 3px;
          background-color: black;
          margin: 1px 0;
        `}
      />
    </div>
  );
};
