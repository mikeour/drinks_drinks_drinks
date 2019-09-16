import React from "react";
import { Link } from "react-router-dom";
import { useSearchQuery } from "../../hooks";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Footer = () => {
  const { resetSearchQuery } = useSearchQuery();
  return (
    <footer
      css={css`
        grid-area: footer;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
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
        Currently: Logged Out - Login{" "}
        <Link
          css={css`
            color: black;
            line-height: 1.7;

            :visited {
              color: black;
            }
          `}
          to="/login"
          onClick={resetSearchQuery}
        >
          here
        </Link>
        .
      </p>
      <p
        css={css`
          padding: 0.25rem;
          font-size: 0.75rem;
        `}
      >
        ©{" "}
        <a
          href="https://www.github.com/mikeour"
          rel="noopener"
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
};

export default Footer;
