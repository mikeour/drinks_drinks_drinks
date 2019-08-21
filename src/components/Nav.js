import React, { useState } from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Close from "../assets/close.svg";

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

      <label
        css={css`
          position: relative;
          display: inline-flex;
          width: 20%;
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
            padding-bottom: 5px;
            display: inline-block;

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
            display: inline-block;
          `}
        >
          Search for ingredients...
        </span>
        {searchQuery.length > 0 && (
          <img
            css={css`
              padding-left: 5px;
              width: 20px;
              height: 20px;
              opacity: 0.6;
              animation: spin;
              animation-duration: 1s;
              animation-iteration-count: 1;

              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
            src={Close}
            onClick={resetSearchQuery}
          />
        )}
      </label>
    </nav>
  );
};
