import React from "react";
import { useModal } from "../../hooks";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Warning = () => {
  const { isModalShowing, hideModal } = useModal();
  return (
    <>
      {isModalShowing && (
        <div
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            border: 1px solid black;
            background: white;

            height: 65%;
            width: 50%;
            z-index: 4;
            filter: none;
            animation: opac 0.3s;
            @keyframes opac {
              from {
                opacity: 0.8;
              }
              to {
                opacity: 1;
              }
            }
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            <h1
              css={css`
                padding: 1rem 2rem;
                font-family: var(--secondary-font);
                font-style: italic;
              `}
            >
              Hey!
            </h1>
            <p
              css={css`
                padding: 1rem 2rem;
                line-height: 1.7;
              `}
            >
              This feature is still a work-in-progress! Check back again soon.
            </p>
            <button
              css={css`
                font-size: 1.2rem;
                padding: 0.3rem 2rem;
                background: lightblue;
                border-radius: 3%;
              `}
              onClick={hideModal}
            >
              Hide
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Warning;
