import { css } from "@emotion/core";

export const navStyles = css`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;

  padding: 1rem 3rem;
  background-color: var(--primary);
`;

export const labelStyles = css`
  position: relative;
  display: inline-flex;
  width: 25%;
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
  width: 20px;
  height: 20px;
  opacity: 0.6;
  animation: spin;
  animation-duration: 1s;
  animation-iteration-count: 1;

  :hover {
    opacity: 0.9;
    transition: 1s;
    width: 22px;
    height: 22px;
    padding-left: 7px;
    transform: scale(1.1, 1.1);
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
