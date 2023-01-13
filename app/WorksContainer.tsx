import React from "react";
import "../styles/WorksContainer.scss";

interface Props {
  title: string;
  main: JSX.Element;
}

export default function WorksContainer({ title, main }: Props) {
  return (
    <main className="works-container">
      <h2>{title}</h2>
      {main}
      <p>
        Shot with Nikon D5500, AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR & Nikon Z5,
        NIKKOR Z 85mm f/1.8 S
      </p>
    </main>
  );
}
