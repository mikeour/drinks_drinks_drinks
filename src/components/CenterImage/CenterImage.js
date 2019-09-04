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
    <div>
      <img css={centerImageStyles} className="animated shake" src={image} />
      <h3
        css={css`
          padding: 25px;
        `}
      >
        <em>Need some inspiration? </em>
        <br />
        <br />
        Try searching for {memoIngredient1}, {memoIngredient2}, or maybe even{" "}
        {"  "}
        {memoIngredient3} ...
      </h3>
    </div>
  );
};

export default CenterImage;
