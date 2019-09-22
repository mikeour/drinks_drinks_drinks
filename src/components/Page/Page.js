import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Page = () => {
  return (
    <div
      css={css`
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
      `}
    >
      <div
        css={css`
          grid-area: info;
          width: 100%;
          height: 100%;
          position: relative;
          background: var(--signup);
        `}
      ></div>
      <div
        css={css`
          grid-area: login;
          height: 100%;
          width: 100%;
          position: relative;
          background: var(--alternate);

          @media (max-width: 800px) {
            padding: 4rem;
          }
        `}
      ></div>
    </div>
  );
};

export default Page;
