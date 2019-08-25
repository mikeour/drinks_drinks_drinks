import React from "react";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { linkStyles, Aside } from "./styles";

const Sidebar = ({ showSidebar, resetSearchQuery }) => {
  return (
    <Aside showSidebar={showSidebar}>
      <Link onClick={resetSearchQuery} css={linkStyles} to="/">
        Home
      </Link>
      <Link css={linkStyles} to="/about">
        About
      </Link>
    </Aside>
  );
};

export default Sidebar;
