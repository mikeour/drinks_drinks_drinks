import React from "react";
import { Link } from "react-router-dom";
import CenterImage from "../CenterImage/CenterImage";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Welcome = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-areas:
          "info"
          "image";
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 3fr;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        text-align: left;

        @media (min-width: 700px) {
          width: 100%;
          height: 100%;
          grid-template-areas: "info image";
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
          background: blanchedalmond;
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @media (max-width: 700px) {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              padding: 1rem 2rem;
            }
          `}
        >
          <h1
            css={css`
              padding: 1rem 2rem;
            `}
          >
            Welcome to <em>Drinks, Drinks, Drinks</em>
          </h1>
          <p
            css={css`
              padding: 1rem 2rem;
              line-height: 1.7;
            `}
          >
            Here you'll be able to search for cocktails based on an ingredient
            you have on hand.
          </p>
          <p
            css={css`
              padding: 1rem 2rem;
              line-height: 1.7;
            `}
          >
            Find a drink you want to remember? Let us do it for you. Create a
            free account{" "}
            <Link
              css={css`
                color: black;
                line-height: 1.7;

                :visited {
                  color: black;
                }
              `}
              to="/signup"
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>

      <div
        css={css`
          grid-area: image;
          width: 100%;
          height: 100%;
          background: white;
          text-align: center;
          position: relative;
        `}
      >
        <CenterImage />
      </div>
    </div>
  );
};

export default Welcome;
