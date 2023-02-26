import React from "react";
import WorksContainer from "../WorksContainer";
import MasonryGrid from "../MasonryGrid";

export default function Casual() {
  return (
    <>
      <WorksContainer
        title="Casual Work"
        main={<MasonryGrid />}
        description="In this gallery you can see a selection of my casual works."
        page="casual"
      />
    </>
  );
}
