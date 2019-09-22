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

export const formStyles = css`
  display: grid;
  grid-template-areas:
    "header"
    "name"
    "break"
    "email"
    "password"
    "create"
    "forgot";
  grid-template-columns: 1fr;
  grid-template-rows:
    2fr minmax(30px, 1fr) 10px repeat(3, minmax(30px, 1fr))
    25px;
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
    height: 75%;
    width: 55%;
    animation: fade 400ms ease-in;

    @keyframes fade {
      from {
        transform: translate(-50%, -49%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
  }
`;
