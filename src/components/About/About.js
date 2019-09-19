import React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { aboutStyles } from "./styles";

const About = () => (
  <div css={aboutStyles} data-testid="about">
    <h1>
      About <em>Drinks, Drinks, Drinks</em>
    </h1>
    <p>My name is Mike and I am a web developer based out of New York.</p>
    <p>
      This site exists as an opportunity to combine two of my favorite things:
      coding and cocktails.
    </p>
    <p>
      Next time you're in the mood for a new recipe, I hope you think of this!
    </p>
    <p>Stay tuned for new features!</p>
  </div>
);

export default About;
