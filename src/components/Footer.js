import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <footer
    css={css`
      grid-area: footer;
      position: relative;
      border-top: 1px solid black;
      background-color: var(--primary);
    `}
  >
    <h6
      css={css`
        left: 100%;
      `}
    />
  </footer>
);
