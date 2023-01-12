import React from "react";
import WorksContainer from "../WorksContainer";
import MasonryGrid from "./MasonryGrid";

export default function Portraits() {
  return (
    <>
      <WorksContainer title="Portraits" main={<MasonryGrid />} />
    </>
  );
}
