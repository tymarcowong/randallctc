import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <h2>randy.ctc</h2>
      <ul id="details">
        <li id="name">Randall Cheng</li>
        <li>Phone: 04 2460 4395</li>
        <li>rcrc1026@gmail.com</li>
      </ul>
      <ul id="socials">
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
      <p>&copy; Randy.CTC. All rights reserved.</p>
    </footer>
  );
}
