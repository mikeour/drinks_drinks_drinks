import React, { memo, useState } from "react";
import { Redirect } from "react-router-dom";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const cardStyles = css`
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.8;
  box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, 0.75);
  transition: 0.5s;

  :hover {
    opacity: 1;
    box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.75);
    background: white;
    z-index: 2;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const drinkNameStyles = css`
  padding: 10px;
  justify-content: center;
  text-align: center;
`;

const imageStyles = css`
  margin: 10px;
  max-width: 150px;
  max-height: 150px;
  border: 0.5px solid darkgray;
  border-radius: 50%;
`;

const Card = ({ strDrink, strDrinkThumb, idDrink }) => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = e => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={`/drink/${idDrink}`} />;
  }

  return (
    <div css={cardStyles} onClick={handleClick}>
      <p css={drinkNameStyles}>{strDrink}</p>
      <img css={imageStyles} src={strDrinkThumb} />
    </div>
  );
};

export default memo(Card);
