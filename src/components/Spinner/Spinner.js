import React from "react";
import ShakerIcon from "../../assets/shaker.png";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Spinner = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
      data-testid="spinner"
    >
      <div
        css={css`
          padding: 5rem;
        `}
      >
        <img src={ShakerIcon} className="animated shake infinite slow"></img>
      </div>
    </div>
  );
};

export default Spinner;
