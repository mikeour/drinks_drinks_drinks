import React from "react";
import { Link } from "react-router-dom";
import { useSidebar, useSearchQuery } from "../../hooks";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { linkStyles, Aside } from "./styles";

const Sidebar = () => {
  const { showSidebar } = useSidebar();
  const { resetSearchQuery } = useSearchQuery();

  return (
    <Aside data-testid="sidebar" showSidebar={showSidebar}>
      <Link onClick={resetSearchQuery} css={linkStyles} to="/">
        Home
      </Link>
      <Link onClick={resetSearchQuery} css={linkStyles} to="/login">
        Login
      </Link>
      <Link onClick={resetSearchQuery} css={linkStyles} to="/signup">
        Signup
      </Link>
      <Link css={linkStyles} to="/about">
        About
      </Link>
    </Aside>
  );
};

export default Sidebar;
