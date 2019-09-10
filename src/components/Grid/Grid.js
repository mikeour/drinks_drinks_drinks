import React, { useState, useEffect, useRef } from "react";
import Cocktails from "../Cocktails/Cocktails";
import CenterImage from "../CenterImage/CenterImage";
import Suggestion from "../Suggestion/Suggestion";
import Info from "../Info/Info";
import Spinner from "../Spinner/Spinner";
import { useCocktailsList, useDrinkInfo } from "../../hooks";
import alphabet from "../../lib/alphabet";

/* Smooth scrolling polyfill for browser-support */
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  showLoadingStyles,
  hideLoadingStyles,
  showDrinkInfoStyles,
  regularLetterStyles,
  boldLetterStyles,
  suggestionStyles
} from "./styles";

const Grid = () => {
  const { cocktails, loading } = useCocktailsList();
  const { showDrinkInfo } = useDrinkInfo();
  const [firstLetters, setFirstLetters] = useState([]);

  const refDictionary = alphabet.reduce((acc, letter) => {
    acc[letter] = useRef(letter);
    return acc;
  }, {});

  const handleClick = letter => {
    refDictionary[letter].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  useEffect(() => {
    const first = [...new Set(cocktails.map(cocktail => cocktail.strDrink[0]))];
    setFirstLetters(first);
  }, [cocktails]);

  return (
    <main
      css={
        cocktails.length <= 0
          ? hideLoadingStyles
          : showDrinkInfo
          ? showDrinkInfoStyles
          : showLoadingStyles
      }
    >
      {cocktails.length <= 0 ? (
        <CenterImage />
      ) : (
        <>
          <div
            css={css`
              grid-area: left;
              position: relative;
              display: grid;
              grid-template-areas:
                "top"
                "bottom";
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
              justify-content: space-evenly;
              background-color: var(--secondary);
            `}
          >
            {!loading && (
              <div
                css={css`
                  grid-area: top;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                `}
              ></div>
            )}
            <div
              css={css`
                display: none;

                @media (min-width: 920px) {
                  display: block;
                  grid-area: bottom;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              `}
            >
              <p>Other popular searches:</p>
              <div css={suggestionStyles}>
                <Suggestion />
              </div>
              <div css={suggestionStyles}>
                <Suggestion />
              </div>
              <div css={suggestionStyles}>
                <Suggestion />
              </div>
            </div>
          </div>

          <div
            css={
              showDrinkInfo
                ? css`
                    grid-area: alphabet;
                    display: none;

                    @media (min-width: 920px) {
                      display: flex;
                      border-right: 1px solid black;
                      flex-direction: column;
                      align-items: center;
                      height: 100%;
                      width: 100%;
                      overflow-y: auto;
                      justify-content: space-evenly;
                      flex-direction: row;
                      border-bottom: 1px solid black;
                      border-right: none;
                    }
                  `
                : css`
                    grid-area: alphabet;
                    display: flex;
                    border-right: 1px solid black;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                    width: 100%;
                    overflow-y: auto;

                    @media (min-width: 920px) {
                      justify-content: space-evenly;
                      flex-direction: row;
                      border-bottom: 1px solid black;
                      border-right: none;
                    }
                  `
            }
          >
            {alphabet.map(char => {
              const doesExist = firstLetters.includes(char);
              return (
                <div
                  css={doesExist ? boldLetterStyles : regularLetterStyles}
                  onClick={() => handleClick(char)}
                  key={char}
                >
                  {char}
                </div>
              );
            })}
          </div>
          <div
            css={
              showDrinkInfo
                ? css`
                    display: none;

                    @media (min-width: 920px) {
                      grid-area: content;
                      display: grid;
                      grid-template-columns: 1fr;
                      grid-template-rows: 1fr;
                      justify-content: center;
                      grid-gap: 15px;
                      overflow-y: scroll;
                      padding: 30px 0;
                    }
                  `
                : css`
                    grid-area: content;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    grid-gap: 15px;
                    overflow-y: scroll;
                    padding: 30px 0;
                  `
            }
          >
            {loading ? (
              <Spinner />
            ) : (
              <Cocktails refDictionary={refDictionary} />
            )}
          </div>
          <div
            css={css`
              grid-area: right;
              background-color: var(--secondary);
            `}
          >
            {showDrinkInfo && <Info />}
          </div>
        </>
      )}
    </main>
  );
};

export default Grid;
