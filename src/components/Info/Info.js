import React from "react";
import { useDrinkInfo } from "../App/App";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Info = () => {
  const { drink } = useDrinkInfo();

  return (
    <div
      css={css`
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-areas:
          "blank name name name newer"
          "blank image image image newer"
          "blank image image image newer"
          "ingredients ingredients new measurements measurements"
          "ingredients ingredients new measurements measurements";
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
      `}
    >
      <div
        css={css`
          grid-area: name;
          justify-content: center;
          text-align: center;
          align-content: center;
          font-size: 1.6rem;
        `}
      >
        {drink.strDrink}
      </div>
      <img
        css={css`
          grid-area: image;
          width: 150px;
          height: 150px;
        `}
        src={drink.strDrinkThumb}
      />
    </div>
  );
};

export default Info;
