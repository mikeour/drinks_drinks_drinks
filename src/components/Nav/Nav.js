import React from "react";
import Burger from "../Burger/Burger";
import Close from "../../assets/close.svg";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  navStyles,
  labelStyles,
  inputStyles,
  spanStyles,
  closeStyles
} from "./styles";

const Nav = ({
  handleChange,
  handleSidebar,
  searchQuery,
  resetSearchQuery
}) => {
  return (
    <nav css={navStyles}>
      <Burger handleSidebar={handleSidebar} />

      <label css={labelStyles}>
        <input
          css={inputStyles}
          placeholder=" "
          value={searchQuery}
          onChange={handleChange}
        />
        <span css={spanStyles}>Search for ingredients here...</span>
        {searchQuery.length > 0 && (
          <img css={closeStyles} src={Close} onClick={resetSearchQuery} />
        )}
      </label>
    </nav>
  );
};

export default Nav;
