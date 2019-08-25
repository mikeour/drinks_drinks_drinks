import React from "react";
import Burger from "../Burger/Burger";
import Close from "../../assets/close.svg";
import { useSearchQuery, useSidebar } from "../App/App";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  navStyles,
  labelStyles,
  inputStyles,
  spanStyles,
  closeStyles
} from "./styles";

const Nav = () => {
  const { searchQuery, resetSearchQuery, handleChange } = useSearchQuery();
  const { handleSidebar } = useSidebar();

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
