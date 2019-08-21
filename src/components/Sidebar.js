import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Aside = styled.aside`
  display: ${props => (props.showSidebar ? "block" : "none")};
  grid-area: side;
  border-right: 1px solid black;
  background-color: floralwhite;
`;

export default ({ showSidebar, resetSearchQuery }) => {
  return (
    <Aside showSidebar={showSidebar}>
      {" "}
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
    </Aside>
  );
};
