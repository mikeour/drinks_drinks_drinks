import React from "react";
import { useDrinkInfo, useSearchQuery } from "../App/App";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Redirect = ({ ingredient }) => {
  const { setSearchQuery } = useSearchQuery();
  const { toggleDrinkInfoOff } = useDrinkInfo();

  const resetSearch = () => {
    setSearchQuery(`${ingredient.toLowerCase()}`);
    toggleDrinkInfoOff();
  };

  return (
    <span
      onClick={resetSearch}
      css={css`
        text-decoration: underline;
        cursor: pointer;
      `}
    >
      {ingredient}
    </span>
  );
};

const Info = () => {
  const { drink } = useDrinkInfo();

  return (
    <div
      css={css`
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-areas:
          "name name name name name"
          "ingredients ingredients ingredients image image"
          "instructions instructions instructions instructions instructions";
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(3, 1fr);
        background-color: var(--secondary);
      `}
    >
      <div
        css={css`
          grid-area: name;
          text-align: center;
          align-self: center;
          font-size: 1.6rem;
        `}
      >
        {drink.strDrink}
      </div>
      <div
        css={css`
          grid-area: ingredients;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin: auto;

          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            height: 40%;
            width: 55%;
            transform: translate(-50%, -50%);
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div>
              <Redirect ingredient={drink.strIngredient1} />
            </div>
            <div
              css={css`
                font-size: 0.75rem;
              `}
            >
              {drink.strMeasure1}
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div>
              <Redirect ingredient={drink.strIngredient2} />
            </div>
            <div
              css={css`
                font-size: 0.75rem;
              `}
            >
              {drink.strMeasure2}
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div>
              <Redirect ingredient={drink.strIngredient3} />
            </div>
            <div
              css={css`
                font-size: 0.75rem;
              `}
            >
              {drink.strMeasure3}
            </div>
          </div>
          {drink.strIngredient4 && (
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <div>
                <Redirect ingredient={drink.strIngredient4} />
              </div>
              <div
                css={css`
                  font-size: 0.75rem;
                `}
              >
                {drink.strMeasure4}
              </div>
            </div>
          )}
          {drink.strIngredient5 && (
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <div>
                <Redirect ingredient={drink.strIngredient5} />
              </div>
              <div
                css={css`
                  font-size: 0.75rem;
                `}
              >
                {drink.strMeasure5}
              </div>
            </div>
          )}
          {drink.strIngredient6 && (
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <div>
                <Redirect ingredient={drink.strIngredient6} />
              </div>
              <div
                css={css`
                  font-size: 0.75rem;
                `}
              >
                {drink.strMeasure6}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        css={css`
          grid-area: image;
          height: 100%;
          width: 100%;

          position: relative;
        `}
      >
        <img
          css={css`
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate(-50%, -70%);

            width: 75%;
            height: 85%;
            border-radius: 3%;
          `}
          src={drink.strDrinkThumb}
        />
      </div>

      <div
        css={css`
          grid-area: instructions;
          width: 100%;
          height: 100%;

          overflow-y: auto;
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 75%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `}
        >
          <p
            css={css`
              font-size: 0.75rem;
            `}
          >
            Instructions:
          </p>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
