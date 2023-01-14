import React from "react";
import GalleryCard from "./GalleryCard";
import casualImage from "../image/casual/_DSC0566.jpg";
import eventsMarketingImage from "../image/events-and-marketing/Malibu-Crush-premiere/_DSC2745.jpg";
import portraitsImage from "../image/portraits/1.jpg";

import "../styles/Home.scss";
import Footer from "./Footer";

const galleries = [
  {
    id: 0,
    name: "portraits",
    image: portraitsImage,
    link: "/portraits",
    alt: "Portrait of a man in front of a wall.",
  },
  {
    id: 1,
    name: "casual",
    image: casualImage,
    link: "/casual",
    alt: "Image of a bridge and a river.",
  },
  {
    id: 2,
    name: "events&marketing",
    image: eventsMarketingImage,
    link: "/eventsMarketing",
    alt: "A man in a confernece activity.",
  },
];

export default function Home() {
  return (
    <>
      <main className="home">
        <h2>portfolio</h2>
        <p>
          Below you can see links to my galleries. Click on an image to view the
          gallery.
        </p>
        <section>
          {galleries.map((gallery) => {
            return (
              <GalleryCard
                key={gallery.id}
                name={gallery.name}
                image={gallery.image}
                link={gallery.link}
                alt={gallery.alt}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
