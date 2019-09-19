import React, { useState, useEffect, useRef } from "react";
import { useSearchQuery, useModal } from "../../hooks";
import { Redirect, Link } from "react-router-dom";
import SigninIcon from "../../assets/signin-icon.png";
import Warning from "../Warning/Warning";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Signup = () => {
  const { searchQuery } = useSearchQuery();
  const { isModalShowing, showModal } = useModal();
  const firstRender = useRef(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formRepeatPassword, setFormRepeatPassword] = useState("");

  const resetValues = () => {
    setFormName("");
    setFormEmail("");
    setFormPassword("");
    setFormRepeatPassword("");
    firstRender.current = false;
  };

  const handleChange = (func, e) => {
    const { value } = e.target;
    func(value);
  };

  useEffect(() => {
    if (firstRender.current === true) {
      const delay = setTimeout(() => {
        showModal();
        resetValues();
      }, 1000);

      return () => clearTimeout(delay);
    }

    firstRender.current = true;
  }, [formName, formEmail, formPassword, formRepeatPassword]);

  if (searchQuery.length > 0) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <div
        css={
          !isModalShowing
            ? css`
                display: grid;
                grid-template-areas: "info login";
                grid-template-columns: 1.25fr 1fr;
                grid-template-rows: 1fr;
                overflow-y: auto;

                @media (max-width: 800px) {
                  display: flex;
                  flex-direction: column;
                }
              `
            : css`
                display: grid;
                grid-template-areas: "info login";
                grid-template-columns: 1.25fr 1fr;
                grid-template-rows: 1fr;
                overflow-y: auto;
                transition: filter 500ms linear;
                filter: blur(3px);

                @media (max-width: 800px) {
                  display: flex;
                  flex-direction: column;
                  transition: filter 500ms linear;
                  filter: blur(3px);
                }
              `
        }
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
              padding: 2rem;
              @media (min-width: 800px) {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
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
        <div
          css={css`
            grid-area: login;
            height: 100%;
            width: 100%;
            position: relative;
            background: blanchedalmond;

            @media (max-width: 800px) {
              padding: 4rem;
            }
          `}
        >
          <form
            css={css`
              display: grid;
              grid-template-areas:
                "header"
                "name"
                "email"
                "password"
                "repeat"
                "create";

              grid-template-columns: 1fr;
              grid-template-rows: 2fr repeat(5, minmax(55px, 1fr));
              grid-gap: 1rem;
              border: 3px solid #555;
              border-radius: 3%;
              padding: 2rem 3rem;
              background: white;

              @media (min-width: 800px) {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 85%;
                width: 70%;
              }
            `}
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
                Signin
              </h1>
            </div>

            <input
              css={css`
                grid-area: name;
                font-size: 1.1rem;
                padding: 0.2rem 0.75rem;
              `}
              type="text"
              placeholder="Enter Full Name"
              name="name"
              value={formName}
              onChange={e => handleChange(setFormName, e)}
            ></input>
            <input
              css={css`
                grid-area: email;
                font-size: 1.1rem;
                padding: 0.2rem 0.75rem;
              `}
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formEmail}
              onChange={e => handleChange(setFormEmail, e)}
            ></input>
            <input
              css={css`
                grid-area: password;
                font-size: 1.1rem;
                padding: 0.2rem 0.75rem;
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
                font-size: 1.1rem;
                padding: 0.2rem 0.75rem;
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
      {isModalShowing && <Warning />}
    </>
  );
};

export default Signup;
