import React from "react";
import Socials from "../Socials";

import avatar from "../../image/about-me.jpg";
import Image from "next/image";

import "../../styles/AboutMe.scss";

export default function aboutMe() {
  return (
    <main id="about-me">
      <div className="img-container">
        <Image src={avatar} alt="An image of Randall." />
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          Final year B-Media student at UNSW, aspiring photographer.
          <br />
          Born in Taiwan, raised in multiple countries.
          <br />
          Fluent in English, Mandarin and Cantonese.
        </p>
        <Socials id={"about-me"} />
      </div>
    </main>
  );
}
