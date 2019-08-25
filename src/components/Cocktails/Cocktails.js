import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useCocktailsList } from "../App/App";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Cocktails = () => {
  const { cocktails } = useCocktailsList();
  const [sortedDrinks, setSortedDrinks] = useState({});

  useEffect(() => {
    const sorted = cocktails.reduce((acc, cur) => {
      let firstLetter = cur.strDrink[0];

      ["'", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach(char => {
        if (firstLetter === char) {
          firstLetter = "#";
        }
      });

      acc[firstLetter]
        ? acc[firstLetter].push(cur)
        : (acc[firstLetter] = [cur]);
      return acc;
    }, {});

    setSortedDrinks(sorted);
  }, [cocktails]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {cocktails &&
        Object.entries(sortedDrinks).map((group, idx) => {
          const [letter, letterCocktails] = group;
          return (
            <div key={idx}>
              <div
                css={css`
                  text-align: center;
                  font-size: 1.6rem;
                `}
              >
                <em>{letter}</em>
              </div>
              {letterCocktails.map(props => (
                <div
                  css={css`
                    padding: 15px 0;
                  `}
                  key={props.idDrink}
                >
                  <Card {...props} />
                </div>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default Cocktails;
