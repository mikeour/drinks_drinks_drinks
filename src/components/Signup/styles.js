import { css } from "@emotion/core";

export const hideModalStyles = css`
  display: grid;
  grid-template-areas:
    "info"
    "login";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
  overflow-y: auto;

  @media (min-width: 800px) {
    grid-template-areas: "info login";
    grid-template-columns: 1.25fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const showModalStyles = css`
  display: grid;
  grid-template-areas: "info login";
  grid-template-columns: 1.25fr 1fr;
  grid-template-rows: 1fr;
  overflow-y: auto;
  transition: filter 500ms linear;
  filter: blur(3px);

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    transition: filter 500ms linear;
    filter: blur(3px);
  }
`;

export const infoStyles = css`
  grid-area: info;
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--signup);
`;

export const textContentStyles = css`
  @media (min-width: 700px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

export const formStyles = css`
  display: grid;
  grid-template-areas:
    "header"
    "name"
    "break"
    "email"
    "password"
    "repeat"
    "create"
    "terms";
  grid-template-columns: 1fr;
  grid-template-rows: 2fr minmax(30px, 1fr) 10px repeat(4, minmax(30px, 1fr)) 20px;
  grid-gap: 1rem;
  border: 2px solid #555;
  border-radius: 4%;
  padding: 2rem 3rem;
  background: white;
  box-shadow: 10px 13px 10px -5px rgba(0, 0, 0, 0.26);

  @media (min-width: 800px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 57.5%;
  }
`;

export const headerStyles = css`
  grid-area: header;
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const buttonStyles = css`
  margin-top: 0.5rem;
  background: #6699ff;
  height: 90%;
  width: 90%;
  transition: background 250ms;

  :hover {
    cursor: pointer;
    background: #3c6bf6;
  }
`;

export const loginStyles = css`
  grid-area: login;
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--alternate);

  @media (max-width: 800px) {
    padding: 4rem;
  }
`;
