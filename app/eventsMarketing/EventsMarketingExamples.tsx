import React from "react";
import "../../styles/EventsMarketingExamples.scss";

interface props {
  heading: string;
  subHeading: string;
}

export default function EventsMarketingExamples({
  heading,
  subHeading,
}: props) {
  return (
    <section className="events-marketing-examples">
      <h2>{heading}</h2>
      <p>{subHeading}</p>
    </section>
  );
}
