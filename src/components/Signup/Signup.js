import React, { useState, useEffect, useRef } from "react";
import { useSearchQuery, useModal } from "../../hooks";
import { Redirect, Link } from "react-router-dom";
import SigninIcon from "../../assets/signin-icon.png";
import Warning from "../Warning/Warning";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  hideModalStyles,
  showModalStyles,
  infoStyles,
  textContentStyles,
  formStyles,
  headerStyles,
  loginStyles,
  buttonStyles
} from "./styles";

const Signup = () => {
  const { searchQuery } = useSearchQuery();
  const { isModalShowing, showModal } = useModal();
  const firstRender = useRef(true);

  // Form state
  const [formUsername, setFormUsername] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formRepeatPassword, setFormRepeatPassword] = useState("");

  // After Modal closes, reset form values and firstRender ref
  const resetValues = () => {
    setFormUsername("");
    setFormEmail("");
    setFormPassword("");
    setFormRepeatPassword("");
    firstRender.current = true;
  };

  const handleChange = (func, e) => {
    const { value } = e.target;
    func(value);
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
  }, [formUsername, formEmail, formPassword, formRepeatPassword]);

  // If users attempts to search from this page, redirect view to home page
  if (searchQuery.length > 0) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <div css={!isModalShowing ? hideModalStyles : showModalStyles}>
        <div css={infoStyles}>
          <div css={textContentStyles}>
            <h1
              css={css`
                padding: 1rem 2rem;
                font-family: var(--secondary-font);
                font-style: italic;
              `}
            >
              Signup now to get started!
            </h1>
            <p
              css={css`
                padding: 1rem 2rem;
                line-height: 1.7;
              `}
            >
              See something that tickles your fancy? Signup now to save it for
              future reference!
            </p>
            <p
              css={css`
                padding: 1rem 2rem;
                line-height: 1.7;
              `}
            >
              <em
                css={css`
                  display: block;
                  padding: 0.4rem 0;
                `}
              >
                Already signed up?
              </em>{" "}
              Head over to our{" "}
              <Link
                css={css`
                  color: black;

                  :visited {
                    color: black;
                  }
                `}
                to="/login"
              >
                login
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
        <div css={loginStyles}>
          <form css={formStyles} autoComplete="off">
            <div css={headerStyles}>
              <img
                src={SigninIcon}
                css={css`
                  width: 17%;
                  height: 17%;
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
                Signup
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
              name="name"
              value={formUsername}
              onChange={e => handleChange(setFormUsername, e)}
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
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formEmail}
              onChange={e => handleChange(setFormEmail, e)}
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
              name="password"
              value={formPassword}
              onChange={e => handleChange(setFormPassword, e)}
            ></input>
            <input
              css={css`
                grid-area: repeat;
                font-size: 0.75rem;
                padding: 0.2rem 0.75rem;
                font-style: italic;
              `}
              type="password"
              placeholder="Repeat Password"
              value={formRepeatPassword}
              onChange={e => handleChange(setFormRepeatPassword, e)}
            ></input>
            <div
              css={css`
                grid-area: create;
                text-align: center;
              `}
            >
              <button css={buttonStyles} onClick={e => e.preventDefault()}>
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
                grid-area: terms;
                text-align: center;
              `}
            >
              <span
                css={css`
                  font-size: 0.5rem;
                `}
              >
                By signing up you agree to the{" "}
                <em
                  css={css`
                    color: blue;
                    text-decoration: underline;

                    :hover {
                      cursor: pointer;
                    }
                  `}
                >
                  Terms of Service
                </em>
              </span>
            </div>
          </form>
        </div>
      </div>
      {isModalShowing && <Warning />}
    </>
  );
};

export default Signup;
