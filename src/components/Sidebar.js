import React from "react";
import styled from "@emotion/styled";

const Aside = styled.aside`
  display: ${props => (props.showSidebar ? "block" : "none")};
  grid-area: side;
  border-right: 1px solid black;
  background-color: floralwhite;
`;

export default ({ showSidebar }) => {
  return <Aside showSidebar={showSidebar} />;
};
