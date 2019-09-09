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
    <p
      css={css`
        padding: 0.25rem;
        font-size: 0.75rem;
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
    </p>
  </footer>
);

export default Footer;
