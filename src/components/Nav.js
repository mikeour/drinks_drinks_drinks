import React, { useState } from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ handleChange, handleSidebar }) => {
  return (
    <nav
      css={css`
        grid-area: nav;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
        padding: 1rem 3rem;
      `}
    >
      <Burger handleSidebar={handleSidebar} />
      <Link
        css={css`
          text-decoration: none;
        `}
        to="/"
      >
        <h1>Cocktail Recipes</h1>
      </Link>

      <input
        css={css`
          border-top: 0;
          border-left: 0;
          border-right: 0;
          border-bottom: 1px solid black;
          font-size: 15px;
          padding: 10px;
          width: 15rem;

          :focus {
            outline: none;
          }
        `}
        placeholder="Search by ingredient..."
        onChange={handleChange}
      />
      <Link
        css={css`
          text-decoration: none;
        `}
        to="/"
      >
        Home
      </Link>
      <Link
        css={css`
          text-decoration: none;
        `}
        to="/about"
      >
        About
      </Link>
    </nav>
  );
};
