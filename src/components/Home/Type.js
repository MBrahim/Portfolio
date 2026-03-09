import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hardware Engineer",
          "Freelancer",
          "Electronics Enthusiast",
          "Schematic Designer",
          "PCB Designer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
