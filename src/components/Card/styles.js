import { css } from "@emotion/core";

export const cardStyles = css`
  border: 1px solid black;
  background-color: white;
  margin: 0 60px;
  display: grid;
  grid-template-areas:
    "name name image"
    "details details image";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  opacity: 0.8;
  box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, 0.75);
  transition: 0.3s;

  :hover {
    opacity: 1;
    box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.75);
    background: white;
    z-index: 99;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const drinkNameStyles = css`
  grid-area: name;
  font-size: 1.1rem;
  padding-left: 1rem;
  align-self: center;
`;

export const imageStyles = css`
  grid-area: image;
  width: 145px;
  height: 145px;
  justify-content: center;
  margin: 0 auto;
  border: 0.5px solid darkgray;
  border-radius: 50%;
`;
