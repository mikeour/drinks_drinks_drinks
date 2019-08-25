import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0.3;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-100px);
    opacity: 0.3;
  }
`;

export const linkStyles = css`
  text-decoration: none;
  margin: 15px;
  color: black;

  :visited {
    color: black;
  }
`;

export const Aside = styled.aside`
  display: ${props => (props.showSidebar ? "flex" : "none")};
  animation: ${props => (props.showSidebar ? fadeIn : fadeOut)} 0.2s;
  transition: all 2s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: side;
  border-right: 1px solid black;
  background-color: var(--primary);
`;
