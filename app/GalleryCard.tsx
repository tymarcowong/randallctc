import { info } from "console";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  name: string;
  image: StaticImageData;
  link: string;
  alt: string;
}

export default function GalleryCard({ name, image, link, alt }: Props) {
  return (
    <div className="img-container">
      <a href={link}>
        <Image src={image} alt={alt} />
      </a>
      <a href={link} className="link-text">
        {name}
      </a>
    </div>
  );
}
