import React from "react";
import Image from "next/image";
import { PORTRAITS_ARRAY } from "../../image/portraits";

import "../../styles/MasonryGrid.scss";

export default function MasonryGrid() {
  return (
    <section className="masonry-grid">
      {PORTRAITS_ARRAY.map((portrait) => (
        <Image key={portrait.id} src={portrait.img} alt={portrait.alt} />
      ))}
    </section>
  );
}
