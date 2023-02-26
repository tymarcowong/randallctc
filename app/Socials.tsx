import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { socials } from "../constants/socials";

import "../styles/Socials.scss";

interface Props {
  id: string;
}

export default function Socials({ id }: Props) {
  return (
    <ul className="socials" id={`${id}_socials`}>
      <li>
        <a href={socials.instagram}>
          <AiFillInstagram />
        </a>
      </li>
      <li>
        <a href={socials.facebook}>
          <AiFillFacebook />
        </a>
      </li>
      <li>
        <a href={socials.linkedin}>
          <AiFillLinkedin />
        </a>
      </li>
    </ul>
  );
}
