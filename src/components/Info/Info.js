import React, { useEffect } from "react";
import { useDrinkInfo, useSearchQuery } from "../App/App";
import Close from "../../assets/close.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { closeStyles, mainInfoStyles } from "./styles";

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
  const { drink, toggleDrinkInfoOff } = useDrinkInfo();

  useEffect(() => {
    let formatted = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = `strIngredient${i}`;
      const measurement = `strMeasure${i}`;
      formatted.push({
        [ingredient]: drink[ingredient],
        [measurement]: drink[measurement]
      });
    }
    console.log(formatted);
  }, [drink]);

  return (
    <div css={mainInfoStyles}>
      <div
        css={css`
          grid-area: name;
          text-align: center;
          align-self: center;
          font-size: 2rem;
        `}
        onClick={toggleDrinkInfoOff}
      >
        <p
          css={css`
            font-size: 0.75rem;
            padding: 0.4rem;
            display: inline-block;
          `}
        >
          <em>Drink name</em>
          <span
            css={css`
              font-size: 2rem;
              padding: 0 2rem;
            `}
          >
            {drink.strDrink}
          </span>
        </p>
        <img css={closeStyles} src={Close} onClick={toggleDrinkInfoOff} />
      </div>

      <div
        css={css`
          grid-area: ingredients;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            top: 50%;
            left: 50%;
            height: 60%;
            width: 80%;
            transform: translate(-50%, -50%);
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                font-size: 0.75rem;
                padding: 0.4rem;
              `}
            >
              <em>Ingredients</em>
            </div>
            <div
              css={css`
                font-size: 0.75rem;
                padding: 0.4rem;
              `}
            >
              <em>Measurements</em>
            </div>
          </div>
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
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            height: 50%;
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
            <em
              css={css`
                padding: 0.6rem;
              `}
            >
              Instructions
            </em>
          </p>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
