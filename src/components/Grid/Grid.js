import React from "react";
import Card from "../Card/Card";
import CenterImage from "../CenterImage/CenterImage";
import Suggestion from "../Suggestion/Suggestion";
import { useCocktailsList, useSearchQuery } from "../App/App";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { showLoading, hideLoading } from "./styles";

const Grid = () => {
  const { cocktails } = useCocktailsList();
  const { setSearchQuery } = useSearchQuery();

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
              grid-area: content;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: repeat(auto-fit, 150px);
              justify-content: center;
              grid-gap: 15px;
              overflow-y: scroll;

              padding: 30px 0;
            `}
          >
            {cocktails &&
              cocktails.map(props => <Card key={props.idDrink} {...props} />)}
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
