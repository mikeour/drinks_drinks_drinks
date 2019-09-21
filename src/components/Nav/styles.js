import { css } from "@emotion/core";

export const navStyles = css`
  grid-area: nav;
  display: grid;
  grid-template-areas: "home search";
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  padding: 1rem;
  background-color: var(--primary);

  @media (min-width: 700px) {
    padding: 1rem 3rem 1rem 1rem;
    grid-template-areas: "burger logo empty search";
    grid-template-columns: minmax(45px, 2fr) minmax(245px, 7fr) 7fr minmax(
        405px,
        5fr
      );
  }
`;

export const labelStyles = css`
  grid-area: search;
  position: relative;
  display: inline-flex;
  justify-content: center;
  /* width: 25%; */
  margin-right: 2%;
`;

export const inputStyles = css`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid black;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: var(--primary);
  font-size: 15px;
  width: 100%;
  padding-bottom: 5px;
  padding-left: 3px;
  padding-top: 3px;
  opacity: 0.8;
  display: inline-block;

  :focus {
    outline: none;
  }

  :focus + span {
    opacity: 1;
    transform: scale(0.75) translateY(-100%) translateX(-40px);
  }

  :not(:placeholder-shown) + span {
    opacity: 1;
    transform: scale(0.75) translateY(-100%) translateX(-40px);
  }
`;

export const spanStyles = css`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
  display: inline-block;
`;

export const closeStyles = css`
  padding-left: 5px;
  width: 8%;
  height: 8%;
  animation: spin;
  animation-duration: 1s;
  animation-iteration-count: 1;

  :hover {
    transition: 1s;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const linkStyles = css`
  display: none;

  @media (min-width: 700px) {
    grid-area: logo;
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    color: black;

    :visited {
      color: black;
    }
  }
`;
