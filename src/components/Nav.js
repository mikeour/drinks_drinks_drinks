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
      <Burger
        css={css`
          flex-grow: 1;
        `}
        handleSidebar={handleSidebar}
      />
      <Link
        onClick={resetSearchQuery}
        css={css`
          text-decoration: none;
          flex-grow: 7;
          margin-left: 2%;

          :visited {
            color: black;
          }
        `}
        to="/"
      >
        <h1>Cocktail Recipes</h1>
      </Link>

      <label
        css={css`
          position: relative;
          display: inline-block;
          flex-grow: 3;
          margin-right: 2%;
        `}
      >
        <input
          css={css`
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1px solid black;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            background-color: floralwhite;
            font-size: 15px;
            width: 100%;
            padding: 10px;

            :focus {
              outline: none;
            }

            :focus + span {
              opacity: 1;
              transform: scale(0.75) translateY(-100%) translateX(-30px);
            }

            :not(:placeholder-shown) + span {
              opacity: 1;
              transform: scale(0.75) translateY(-100%) translateX(-30px);
            }
          `}
          placeholder=" "
          value={searchQuery}
          onChange={handleChange}
        />
        <span
          css={css`
            pointer-events: none;
            position: absolute;
            left: 0;
            top: 0;
            transition: 0.2s;
            transition-timing-function: ease;
            transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
            opacity: 0.5;
          `}
        >
          Search for ingredients...
        </span>
      </label>

      <Link
        onClick={resetSearchQuery}
        css={css`
          text-decoration: none;
          flex-grow: 0.3;

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
          flex-grow: 0;

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
