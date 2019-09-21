import React from "react";
import { Link } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Forgot = () => {
  return (
    <div
      css={css`
        position: relative;
        background: var(--alternate);
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          border: 2px solid #555;
          border-radius: 4%;
          padding: 2rem 3rem;
          background: white;
          box-shadow: 10px 13px 10px -5px rgba(0, 0, 0, 0.26);
          text-align: center;
          justify-content: center;
          width: 35%;
        `}
      >
        <h1
          css={css`
            padding: 1rem 0.5rem;
          `}
        >
          Forgot Password?
        </h1>
        <p
          css={css`
            padding: 1rem 0.5rem;
          `}
        >
          Enter your account email address and we will send you a link to reset
          your password.
        </p>
        <form
          css={css`
            margin: 1rem;
          `}
        >
          <input
            css={css`
              width: 100%;
              padding: 1rem 0.5rem;
              margin: 1rem 0;
              font-size: 0.75rem;
              font-style: italic;
            `}
            type="text"
            placeholder="Email"
          ></input>
          <button
            css={css`
              background: #6699ff;
              width: 100%;
              padding: 1rem 0.5rem;
              margin: 1rem 0 0 0;
              transition: background 250ms;

              :hover {
                cursor: pointer;
                background: #3c6bf6;
              }
            `}
            onClick={e => e.preventDefault()}
          >
            <span
              css={css`
                font-size: 0.75rem;
                color: white;
              `}
            >
              Request Password Reset
            </span>
          </button>
          <Link
            css={css`
              display: block;
              background: limegreen;
              width: 100%;
              padding: 1rem 0.5rem;
              margin: 1rem 0 0 0;
              transition: background 250ms;
              text-decoration: none;

              :hover {
                cursor: pointer;
                background: green;
              }
            `}
            to="/"
          >
            <span
              css={css`
                font-size: 0.75rem;
                color: white;
              `}
            >
              Back to Home
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
