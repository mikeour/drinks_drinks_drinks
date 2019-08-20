import React, { useState } from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({
  handleChange,
  handleSidebar,
  searchQuery,
  resetSearchQuery
}) => {
  return (
    <nav
      css={css`
        grid-area: nav;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;
        padding: 1rem 3rem;
        background-color: floralwhite;
      `}
    >
      <Burger handleSidebar={handleSidebar} />
      <Link
        onClick={resetSearchQuery}
        css={css`
          text-decoration: none;

          :visited {
            color: black;
          }
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
          border-top-left-radius: 7px;
          border-top-right-radius: 7px;
          font-size: 15px;
          padding: 10px;
          width: 15rem;

          :focus {
            outline: none;
          }
        `}
        placeholder="Search by ingredient..."
        value={searchQuery}
        onChange={handleChange}
      />
      <Link
        onClick={resetSearchQuery}
        css={css`
          text-decoration: none;

          :visited {
            color: black;
          }
        `}
        to="/"
      >
        Home
      </Link>
      <Link
        css={css`
          text-decoration: none;

          :visited {
            color: black;
          }
        `}
        to="/about"
      >
        About
      </Link>
    </nav>
  );
};
