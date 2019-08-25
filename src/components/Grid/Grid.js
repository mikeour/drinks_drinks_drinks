import React, { useState, useEffect, useRef } from "react";
import Cocktails from "../Cocktails/Cocktails";
import CenterImage from "../CenterImage/CenterImage";
import Suggestion from "../Suggestion/Suggestion";
import { useCocktailsList, useSearchQuery } from "../App/App";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { showLoading, hideLoading } from "./styles";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Grid = () => {
  const { cocktails } = useCocktailsList();
  const { setSearchQuery } = useSearchQuery();
  const [firstLetters, setFirstLetters] = useState([]);

  useEffect(() => {
    const first = [...new Set(cocktails.map(cocktail => cocktail.strDrink[0]))];
    setFirstLetters(first);
  }, [cocktails]);

  return (
    <main css={cocktails.length <= 0 ? hideLoading : showLoading}>
      {cocktails.length <= 0 ? (
        <CenterImage setSearchQuery={setSearchQuery} />
      ) : (
        <>
          <div
            css={css`
              grid-area: left;
              position: relative;
            `}
          >
            <div
              css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              `}
            >
              <p>Other popular searches:</p>
              <div
                css={css`
                  padding: 10px 0;
                `}
              >
                <Suggestion />
              </div>
              <div
                css={css`
                  padding: 10px 0;
                `}
              >
                <Suggestion />
              </div>
              <div
                css={css`
                  padding: 10px 0;
                `}
              >
                <Suggestion />
              </div>
            </div>
          </div>
          <div
            css={css`
              grid-area: alphabet;
            `}
          >
            {/* {firstLetters && firstLetters.map(letter => <p>{letter}</p>)} */}
          </div>
          <div
            css={css`
              grid-area: content;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-content: center;
              grid-gap: 15px;
              overflow-y: scroll;

              padding: 30px 0;
            `}
          >
            {cocktails && <Cocktails />}
          </div>
          <div
            css={css`
              grid-area: right;
            `}
          />
        </>
      )}
    </main>
  );
};

export default Grid;
