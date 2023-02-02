import React from "react";
import WorksContainer from "../WorksContainer";
import MasonryGrid from "../MasonryGrid";

export default function Portraits() {
  return (
    <>
      <WorksContainer
        title="commissioned portraits"
        main={<MasonryGrid />}
        description={
          "In this gallery you can see a selection of my commisionned work. I hope you enjoy."
        }
        page="portraits"
      />
    </>
  );
}
