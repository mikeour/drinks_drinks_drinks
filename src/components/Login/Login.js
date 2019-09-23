import React, { useState, useEffect, useRef } from "react";
import { useSearchQuery, useModal } from "../../hooks";
import { Redirect, Link } from "react-router-dom";
import Warning from "../Warning/Warning";
import LoginIcon from "../../assets/login-icon.png";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { hideModalStyles, showModalStyles, formStyles } from "./styles";

// Initial Form state
const initialState = {
  username: "",
  email: "",
  password: ""
};

const Login = () => {
  // Redux state
  const { searchQuery } = useSearchQuery();
  const { isModalShowing, showModal } = useModal();

  // Local Form state
  const [form, setForm] = useState(initialState);

  // Ref
  const firstRender = useRef(true);

  // After Modal closes, reset form value and firstRender ref
  const resetValues = () => {
    setForm(initialState);
    firstRender.current = true;
  };

  // On user input, update target form field
  const handleChange = (formField, e) => {
    const { value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [formField]: value
    }));
  };

  // As user inputs into form, trigger a delay followed by pop-up Modal
  useEffect(() => {
    const showModalFrame = () => showModal();

    if (firstRender.current === false) {
      const delayBeforeModalShows = setTimeout(() => {
        requestAnimationFrame(showModalFrame);
        resetValues();
      }, 1000);

      return () => clearTimeout(delayBeforeModalShows);
    }

    firstRender.current = false;
  }, [form]);

  // If users attempts to search from this page, redirect view to home page
  if (searchQuery.length > 0) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <div css={!isModalShowing ? hideModalStyles : showModalStyles}>
        <div
          css={css`
            grid-area: info;
            width: 100%;
            height: 100%;
            position: relative;
            background: var(--signup);
          `}
        >
          <div
            css={css`
              @media (min-width: 700px) {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
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

              @media (max-width: 700px) {
                padding: 2rem;
                animation: none;
              }
            `}
          >
            <h1
              css={css`
                padding: 1rem 2rem;
                font-family: var(--secondary-font);
                font-style: italic;
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
              <em
                css={css`
                  display: block;
                  padding: 0.4rem 0;
                `}
              >
                Still need to sign up?{" "}
              </em>
              Do not fret. Head to our{" "}
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
              page.
            </p>
          </div>
        </div>
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
        >
          <form
            css={formStyles}
            onClick={e => e.preventDefault()}
            autoComplete="off"
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
                grid-area: name;
                font-size: 0.75rem;
                padding: 0.2rem 0.75rem;
                font-style: italic;
              `}
              type="text"
              placeholder="Enter Username"
              value={form.username}
              onChange={e => handleChange("username", e)}
            ></input>
            <div
              css={css`
                grid-area: break;
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <span
                css={css`
                  padding: 0.5rem;
                  font-size: 0.85rem;
                  width: 100%;
                  display: grid;
                  align-items: center;
                  text-align: center;
                  grid-template-columns: minmax(20px, 1fr) auto minmax(
                      20px,
                      1fr
                    );
                  grid-gap: 19px;
                  font-style: italic;

                  ::before {
                    content: "";
                    border-top: 1px solid #444;
                  }

                  ::after {
                    content: "";
                    border-top: 1px solid #444;
                  }
                `}
              >
                or
              </span>
            </div>
            <input
              css={css`
                grid-area: email;
                font-size: 0.75rem;
                padding: 0.2rem 0.75rem;
                font-style: italic;
              `}
              type="text"
              placeholder="Enter Email"
              name="email"
              value={form.email}
              onChange={e => handleChange("email", e)}
            ></input>
            <input
              css={css`
                grid-area: password;
                font-size: 0.75rem;
                padding: 0.2rem 0.75rem;
                font-style: italic;
              `}
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={e => handleChange("password", e)}
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
                  Submit
                </span>
              </button>
            </div>
            <div
              css={css`
                grid-area: forgot;
                text-align: center;
              `}
            >
              <Link to="/forgot">
                <em
                  css={css`
                    font-size: 0.75rem;
                    color: blue;
                    text-decoration: underline;

                    :hover {
                      cursor: pointer;
                    }
                  `}
                >
                  Forgot your password?
                </em>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {isModalShowing && <Warning />}
    </>
  );
};

export default Login;
