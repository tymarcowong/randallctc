import React from "react";

import "../styles/Footer.scss";

import Socials from "./Socials";

export default function Footer() {
  return (
    <footer>
      <h2>randy.ctc</h2>
      <ul id="details">
        <li id="name">Randall Cheng</li>
        <li>Phone: 04 2460 4395</li>
        <li>rcrc1026@gmail.com</li>
      </ul>
      <Socials id={"footer"} />
      <p>&copy; Randy.CTC. All rights reserved.</p>
    </footer>
  );
}
