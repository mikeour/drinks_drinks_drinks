import { css } from "@emotion/core";

export const buttonStyles = css`
  display: inline-flex;
  flex-direction: column;
  opacity: 0.7;
  transition: 0.7s linear;

  :hover {
    opacity: 1;
    /* transform: scale(1.085, 1.085); */
  }
`;

export const burgerStyles = css`
  width: 19px;
  height: 3px;
  background-color: black;
  margin: 1px 0;
`;
