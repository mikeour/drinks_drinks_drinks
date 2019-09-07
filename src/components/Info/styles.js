import { css } from "@emotion/core";

export const closeStyles = css`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
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
    ". . . ."
    ". name name ."
    ". ingredients image ."
    ". instructions image ."
    ". . . .";
  grid-template-columns: 0.5rem 1.5fr 45% 0.5rem;
  grid-template-rows: 0.5fr 1fr 2fr 2fr 1fr;
  grid-gap: 0.5rem;
  background-color: var(--secondary);
`;
