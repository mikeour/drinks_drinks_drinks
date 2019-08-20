import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ handleSidebar }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
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
