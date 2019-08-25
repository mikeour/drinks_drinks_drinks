import { css } from "@emotion/core";

export const showLoading = css`
  grid-area: grid;
  display: grid;
  grid-template-columns: minmax(240px, 450px);
  grid-template-rows: repeat(auto-fit, 150px);
  justify-content: center;
  grid-gap: 15px;
  overflow-y: scroll;
`;

export const hideLoading = css`
  position: relative;
  text-align: center;
`;
