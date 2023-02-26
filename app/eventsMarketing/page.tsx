import React from "react";
import WorksContainer from "../WorksContainer";
import Events from "./Events";

export default function EventsMarketing() {
  return (
    <>
      <WorksContainer
        title="Events & Marketing"
        main={<Events />}
        description="Below you can see links to my galleries. Click on an image to view the gallery."
        page="eventsMarketing"
      />
    </>
  );
}
