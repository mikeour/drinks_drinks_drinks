import React from "react";
import { Link } from "react-router-dom";
import { useSidebar, useSearchQuery } from "../../hooks";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { linkStyles, Aside } from "./styles";

const Sidebar = () => {
  const { showSidebar } = useSidebar();
  const { resetSearchQuery } = useSearchQuery();

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
