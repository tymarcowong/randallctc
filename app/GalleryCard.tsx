import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import "../styles/GalleryCard.scss";

interface Props {
  name: string;
  image: StaticImageData;
  link: string;
  alt: string;
}

export default function GalleryCard({ name, image, link, alt }: Props) {
  return (
    <div className="card">
      <a href={link} className="img-container">
        <Image src={image} alt={alt} />
      </a>
      <a href={link} className="link-text">
        {name}
      </a>
    </div>
  );
}
