import React, { useState } from "react";
import { Redirect } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ strDrink, strDrinkThumb, idDrink }) => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = e => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={`/drink/${idDrink}`} />;
  }

  return (
    <div
      css={css`
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 0.8;

        :hover {
          opacity: 1;
        }
      `}
      onClick={handleClick}
    >
      <p
        css={css`
          text-align: center;
        `}
      >
        {strDrink}
      </p>
      <img
        css={css`
          width: 150px;
          height: 150px;
        `}
        src={strDrinkThumb}
      />
    </div>
  );
};
