import { css } from "@emotion/core";

export const cardStyles = css`
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.8;
  box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, 0.75);
  transition: 0.3s;

  :hover {
    opacity: 1;
    box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.75);
    background: white;
    z-index: 2;
    transform: scale(1.05);
    cursor: pointer;
  }

  /* :last-child {
    margin-bottom: 40px;
  } */
`;

export const drinkNameStyles = css`
  padding: 10px;
  justify-content: center;
  text-align: center;
`;

export const imageStyles = css`
  margin: 10px;
  max-width: 150px;
  max-height: 150px;
  border: 0.5px solid darkgray;
  border-radius: 50%;
`;
