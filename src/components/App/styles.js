import { css } from "@emotion/core";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap");

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  :root {
    --primary: honeydew;
    --secondary: white;
  }
`;

export const showSidebarStyles = css`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "side nav"
    "side grid"
    "side footer";
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 2fr 14fr 1fr;
`;

export const hideSidebarStyles = css`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav"
    "grid"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 14fr 1fr;
`;
