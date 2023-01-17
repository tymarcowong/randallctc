import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

import "../styles/Socials.scss";

interface Props {
  id: string;
}

export default function Socials({ id }: Props) {
  return (
    <ul className="socials" id={`${id}_socials`}>
      <li>
        <a href="/">
          <AiFillInstagram />
        </a>
      </li>
      <li>
        <a href="/">
          <AiFillFacebook />
        </a>
      </li>
      <li>
        <a href="/">
          <AiFillLinkedin />
        </a>
      </li>
    </ul>
  );
}
