import React, { useState } from "react";
import { useSearchQuery, useFirebase } from "../../hooks";
import { Redirect, Link } from "react-router-dom";
import SigninIcon from "../../assets/signin-icon.png";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Signup = () => {
  const { searchQuery } = useSearchQuery();
  const { addUser, getUsers } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (func, value) => func(value);
  const handleSubmit = e => {
    e.preventDefault();
    addUser({ name, email, password });
  };

  if (searchQuery.length > 0) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-areas: "info login";
        grid-template-columns: 1.25fr 1fr;
        grid-template-rows: 1fr;
        overflow-y: auto;

        @media (max-width: 800px) {
          display: flex;
          flex-direction: column;
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
            (Already signed up?{" "}
            <Link
              css={css`
                color: black;

                :visited {
                  color: black;
                }
              `}
              to="/login"
            >
              Login here
            </Link>
            ).{" "}
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
            height: 85%;
            width: 70%;
            display: grid;
            grid-template-areas:
              "header"
              "name"
              "email"
              "password"
              "repeat"
              "create";
            grid-template-columns: 1fr;
            grid-template-rows: 2fr repeat(4, 1fr) 1.2fr;
            grid-gap: 1rem;
            border: 3px solid #555;
            border-radius: 3%;
            padding: 2rem 3rem;
            background: white;
          `}
          onClick={handleSubmit}
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
            onChange={e => handleChange(setName, e.target.value)}
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
            onChange={e => handleChange(setEmail, e.target.value)}
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
            onChange={e => handleChange(setPassword, e.target.value)}
          ></input>
          <input
            css={css`
              grid-area: repeat;
              font-size: 1.1rem;
              padding: 0.2rem 0.75rem;
            `}
            type="password"
            placeholder="Repeat Password"
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

export default Signup;
