import React from "react";
import "../styles/WorksContainer.scss";
import Footer from "./Footer";

interface Props {
  title: string;
  main: JSX.Element;
  description: string;
}

export default function WorksContainer({ title, main, description }: Props) {
  return (
    <>
      <main className="works-container">
        <div className="title-container">
          <h2>{title}</h2>
        </div>
        <p id="description">{description}</p>
        {main}
        <p id="setup">
          Shot with Nikon D5500, AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR <br />&
          Nikon Z5, NIKKOR Z 85mm f/1.8 S
        </p>
      </main>
      <Footer />
    </>
  );
}
