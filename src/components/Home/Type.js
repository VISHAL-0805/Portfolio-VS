import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Assistant Machine Learning Engineer at Capsitech",
          "Deep Learning & Neural Networks Enthusiast",
          "NLP & Text Summarization Practitioner",
          "Published AI Researcher (ISMS 2023)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
