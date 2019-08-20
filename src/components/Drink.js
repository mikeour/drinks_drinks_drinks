import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default ({ history, location, match }) => {
  const [instructions, setInstructions] = useState("");
  const drinkID = location.pathname.split("/")[2];

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
    fetch(url)
      .then(raw => raw.json())
      .then(({ drinks }) => {
        const { strInstructions } = drinks[0];
        setInstructions(strInstructions);
      });
  }, [drinkID]);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>{instructions}</div>
    </div>
  );
};
