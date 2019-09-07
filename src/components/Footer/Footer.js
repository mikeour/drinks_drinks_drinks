import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Footer = () => (
  <footer
    css={css`
      grid-area: footer;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 1px solid black;
      background-color: var(--primary);
    `}
  >
    <h6
      css={css`
        padding: 0.25rem;
      `}
    >
      ©{" "}
      <a
        href="https://www.github.com/mikeour"
        target="_blank"
        css={css`
          text-decoration: none;
          color: black;

          :visited {
            color: black;
          }
        `}
      >
        mikeour
      </a>
      , 2019
    </h6>
  </footer>
);

export default Footer;
