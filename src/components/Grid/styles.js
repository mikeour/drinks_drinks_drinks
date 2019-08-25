import { css } from "@emotion/core";

export const showLoading = css`
  display: grid;
  grid-template-areas: "left alphabet content right";
  grid-template-columns: 3fr 10px 6fr 3fr;
  overflow: hidden;
`;

export const hideLoading = css`
  position: relative;
  text-align: center;
`;
