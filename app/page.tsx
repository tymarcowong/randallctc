import React from "react";
import GalleryCard from "./GalleryCard";
// import casualImage from "../image/casual/_DSC0566.jpg";
// import eventsMarketingImage from "../image/events-and-marketing/Malibu-Crush-premiere/_DSC2745.jpg";
import { PORTRAITS_ICON } from "../image/portraits";
import { CASUAL_ICON } from "../image/casual";
import { EVENTS_ICON } from "../image/events-and-marketing";
import FOOTER_IMAGE from "../image/footer.jpg";

import "../styles/Home.scss";
import Footer from "./Footer";

const galleries = [
  {
    id: 0,
    name: "portraits",
    image: PORTRAITS_ICON,
    link: "/portraits",
    alt: "Portrait of a man in front of a wall.",
  },
  {
    id: 1,
    name: "casual",
    image: CASUAL_ICON,
    link: "/casual",
    alt: "Image of a bridge and a river.",
  },
  {
    id: 2,
    name: "events&marketing",
    image: EVENTS_ICON,
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
