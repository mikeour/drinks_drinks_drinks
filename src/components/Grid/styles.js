import { css } from "@emotion/core";

export const showLoading = css`
  display: grid;
  grid-template-areas:
    "left alphabet alphabet right"
    "left content content right";
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  grid-template-rows: 20px 1fr;
  overflow: hidden;
`;

export const showDrinkInfoStyles = css`
  display: grid;
  grid-template-areas:
    "left alphabet right right"
    "left content right right";
  grid-template-columns: 1fr 3.5fr 2fr 2fr;
  grid-template-rows: 20px 1fr;
  overflow: hidden;
`;

export const hideLoading = css`
  position: relative;
  text-align: center;
`;
