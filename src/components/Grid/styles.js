import { css } from "@emotion/core";

export const showLoading = css`
  display: grid;
  grid-template-areas:
    "left alphabet alphabet right"
    "left content content right";
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  grid-template-rows: 45px 1fr;
  overflow: hidden;
`;

export const showDrinkInfoStyles = css`
  display: grid;
  grid-template-areas:
    "left alphabet right right"
    "left content right right";
  grid-template-columns: 1fr 3.5fr 2fr 2fr;
  grid-template-rows: 45px 1fr;
  overflow: hidden;
`;

export const hideLoading = css`
  position: relative;
  text-align: center;
`;

export const regularLetterStyles = css`
  padding: 5px 5px 10px 5px;
  opacity: 0.4;

  :hover {
    transform: scale(1.125, 1.125);
    cursor: pointer;
  }
`;

export const boldLetterStyles = css`
  padding: 5px 5px 10px 5px;
  opacity: 1;

  :hover {
    transform: scale(1.125, 1.125);
    cursor: pointer;
  }
`;
