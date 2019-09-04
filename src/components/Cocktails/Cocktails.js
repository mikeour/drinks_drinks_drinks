import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useCocktailsList } from "../../hooks";
import numbers from "../../lib/numbers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Cocktails = ({ refDictionary }) => {
  const { cocktails } = useCocktailsList();
  const [sortedDrinks, setSortedDrinks] = useState({});

  useEffect(() => {
    const sortedDrinksByFirstLetter = cocktails.reduce((acc, cur) => {
      let firstLetter = cur.strDrink[0];

      numbers.forEach(char => {
        if (firstLetter === char) {
          firstLetter = "#";
        }
      });

      acc[firstLetter]
        ? acc[firstLetter].push(cur)
        : (acc[firstLetter] = [cur]);
      return acc;
    }, {});

    setSortedDrinks(sortedDrinksByFirstLetter);
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
              <p
                css={css`
                  text-align: center;
                  font-size: 1.6rem;
                `}
                ref={refDictionary[letter]}
              >
                <em>{letter}</em>
              </p>
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
