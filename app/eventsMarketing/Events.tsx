import React from "react";
import "../../styles/Events.scss";
import {
  MALIBU_ICON,
  MARKETING_ICON,
  DOUBLEDELICIOUS_ICON,
} from "../../image/events-and-marketing";
import GalleryCard from "../GalleryCard";

const events = [
  {
    id: 0,
    name: "double delicious",
    image: DOUBLEDELICIOUS_ICON,
    link: "/double-delicious",
    alt: "Portrait of a man in front of a wall.",
  },
  {
    id: 1,
    name: "malibu crush premiere",
    image: MALIBU_ICON,
    link: "/malibu-crush-premiere",
    alt: "Image of a bridge and a river.",
  },
  {
    id: 2,
    name: "marketing materials",
    image: MARKETING_ICON,
    link: "/marketing",
    alt: "A man in a confernece activity.",
  },
];

export default function Events() {
  return (
    <section className="events">
      {events.map((event) => {
        return (
          <GalleryCard
            key={event.id}
            name={event.name}
            image={event.image}
            link={`/eventsMarketing${event.link}`}
            alt={event.alt}
          />
        );
      })}
    </section>
  );
}
