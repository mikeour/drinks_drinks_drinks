import React from "react";
import "./styles.css";

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
      <div className="la-line-spin-clockwise-fade la-dark la-2x">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
