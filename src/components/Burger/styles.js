import { css } from "@emotion/core";

export const buttonStyles = css`
  display: none;

  @media (min-width: 700px) {
    grid-area: burger;
    display: inline-flex;
    flex-direction: column;
    opacity: 0.7;
    transition: 0.7s linear;
    align-items: center;

    :hover {
      opacity: 1;
    }
  }
`;

export const burgerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  border: 1px solid var(--primary);
  border-radius: 50%;
  transition: background 250ms;

  :hover {
    border: 1px solid white;
    background: white;
  }
`;

export const pattyStyles = css`
  width: 19px;
  height: 3px;
  background-color: black;
  margin: 1px 0;
`;
