import { css } from "@emotion/core";

export const closeStyles = css`
  width: 12px;
  height: 12px;
  opacity: 0.6;

  :hover {
    opacity: 0.9;
  }
`;

export const mainInfoStyles = css`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "name name name name"
    "ingredients ingredients image image"
    "instructions instructions instructions instructions";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr 2fr;
  background-color: var(--secondary);
`;
