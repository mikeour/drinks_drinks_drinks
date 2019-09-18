import React from "react";
import Burger from "../Burger/Burger";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/close.png";
import { useSearchQuery, useSidebar, useDrinkInfo } from "../../hooks";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  navStyles,
  labelStyles,
  inputStyles,
  spanStyles,
  closeStyles,
  linkStyles
} from "./styles";

const Nav = () => {
  const { searchQuery, resetSearchQuery, handleChange } = useSearchQuery();
  const { handleSidebar } = useSidebar();
  const { toggleDrinkInfoOff } = useDrinkInfo();

  const resetSearch = e => {
    toggleDrinkInfoOff();
    resetSearchQuery();
  };

  return (
    <nav css={navStyles}>
      <Burger handleSidebar={handleSidebar} />
      <Link css={linkStyles} onClick={resetSearch} to="/">
        <p>Drinks, Drinks, Drinks</p>
      </Link>

      <label css={labelStyles}>
        <input
          css={inputStyles}
          placeholder=" "
          value={searchQuery}
          onChange={handleChange}
          data-testid="search"
        />
        <span css={spanStyles}>Search for ingredients here...</span>
        {searchQuery.length > 0 && (
          <img css={closeStyles} src={CloseIcon} onClick={resetSearchQuery} />
        )}
      </label>
    </nav>
  );
};

export default Nav;
