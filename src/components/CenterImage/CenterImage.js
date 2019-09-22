import React, { useMemo } from "react";
import Suggestion from "../Suggestion/Suggestion";
import HappyHour from "../../assets/happyhour.gif";
import HappyHour2 from "../../assets/happyhour1.gif";
import HappyHour3 from "../../assets/happyhour2.gif";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { centerImageStyles } from "./styles";

const CenterImage = () => {
  const image = useMemo(() => {
    const images = [HappyHour, HappyHour2, HappyHour3];
    const min = 0;
    const max = images.length;
    return images[Math.floor(Math.random() * (max - min)) + min];
  }, []);

  const memoIngredient1 = useMemo(() => <Suggestion />, []);
  const memoIngredient2 = useMemo(() => <Suggestion />, []);
  const memoIngredient3 = useMemo(() => <Suggestion />, []);
  return (
    <div
      css={css`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
      `}
    >
      <em
        css={css`
          display: block;
          padding: 0.4rem;
          line-height: 3;
        `}
      >
        Need some inspiration?{" "}
      </em>
      <img
        css={centerImageStyles}
        className="animated shake"
        src={image}
        alt="Shaking of a cocktail"
      />
      <p
        css={css`
          padding: 25px;
        `}
      >
        Try searching for {memoIngredient1}, {memoIngredient2}, or maybe even{" "}
        {memoIngredient3} ...
      </p>
    </div>
  );
};

export default CenterImage;
