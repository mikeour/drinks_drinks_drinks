import { css } from "@emotion/core";

export const gridStyles = css`
  display: grid;
  grid-template-areas: "left middle right";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
`;

export const backButtonStyles = css`
  position: absolute;
  text-decoration: none;
  color: black;
  top: 30px;
  left: 30px;

  :visited {
    color: black;
  }
`;

export const leftGridStyles = css`
  grid-area: left;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-right: 1px solid black;
`;

export const middleGridStyles = css`
  grid-area: middle;
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const prevDrinkButtonStyles = css`
  text-decoration: none;
  color: black;
  padding: 15px;
  text-align: center;
  border: 1px solid black;

  :visited {
    color: black;
  }
`;

export const drinkThumbnailStyles = css`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.75);
`;
