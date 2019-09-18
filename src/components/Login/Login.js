import React from "react";
import { useSearchQuery } from "../../hooks";
import { Redirect, Link } from "react-router-dom";
import LoginIcon from "../../assets/login-icon.png";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Login = () => {
  const { searchQuery } = useSearchQuery();

  if (searchQuery.length > 0) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div
      css={css`
        display: grid;
        grid-template-areas:
          "info"
          "login";
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        overflow-y: scroll;

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
          background: lightblue;
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
            `}
          >
            Login now to save your favorite cocktails!
          </h1>
          <p
            css={css`
              padding: 1rem 2rem;
              line-height: 1.7;
            `}
          >
            See something that tickles your fancy? Login now to save it for
            future reference!
          </p>

          <p
            css={css`
              padding: 1rem 2rem;
            `}
          >
            (Still need to sign up? Do not fret. Head to our{" "}
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
              signup
            </Link>{" "}
            page. ).
          </p>
        </div>
      </div>
      <div
        css={css`
          grid-area: login;
          height: 100%;
          width: 100%;
          position: relative;
          background: blanchedalmond;
        `}
      >
        <form
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 75%;
            width: 65%;
            display: grid;
            grid-template-areas:
              "header"
              "email"
              "password"
              "create";
            grid-template-columns: 1fr;
            grid-auto-rows: 1.5fr 0.75fr 0.75fr 1fr;
            grid-gap: 2rem;
            border: 3px solid #555;
            border-radius: 3%;
            padding: 2rem 3rem;
            background: white;
          `}
          onClick={e => e.preventDefault()}
        >
          <div
            css={css`
              grid-area: header;
              display: flex;
              text-align: center;
              align-self: center;
              justify-content: center;
              align-items: center;
            `}
          >
            <img
              src={LoginIcon}
              css={css`
                width: 20%;
                height: 20%;
                display: inline-block;
              `}
            />
            <h1
              css={css`
                font-weight: bold;
                display: inline-block;
                padding: 0.5rem 2rem;
              `}
            >
              Login
            </h1>
          </div>
          <input
            css={css`
              grid-area: email;
              font-size: 1.1rem;
              padding: 0.2rem 0.75rem;
            `}
            type="text"
            placeholder="Enter Email"
          ></input>
          <input
            css={css`
              grid-area: password;
              font-size: 1.1rem;
              padding: 0.2rem 0.75rem;
            `}
            type="password"
            placeholder="Enter Password"
          ></input>
          <div
            css={css`
              grid-area: create;
              text-align: center;
            `}
          >
            <button
              css={css`
                background: #6699ff;
                height: 90%;
                width: 90%;

                :hover {
                  cursor: pointer;
                }
              `}
            >
              <span
                css={css`
                  font-size: 1.1rem;
                  color: white;
                `}
              >
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
