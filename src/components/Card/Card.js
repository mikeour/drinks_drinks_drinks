import React, { useState } from "react";
import { Redirect } from "react-router-dom";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { cardStyles, drinkNameStyles, imageStyles } from "./styles";

const Card = ({ strDrink, strDrinkThumb, idDrink }) => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = e => setRedirect(true);

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

export default Card;
