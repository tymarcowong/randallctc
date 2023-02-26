"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "../styles/Header.scss";

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  let className = "";
  if (usePathname()?.startsWith(href) && href !== "/") {
    className += "active";
  } else if (usePathname() === "/" && href === "/") {
    className += "active";
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Header() {
  const [active, setActive] = useState(false);

  function toggleHamburger() {
    setActive((prev) => !prev);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <>
      <header className={active ? "active" : ""}>
        <h1>
          <Link href="/">RANDALL.CTC</Link>
        </h1>

        <nav id="mobile">
          <button
            className={`hamburger ${active ? "active" : ""}`}
            onClick={toggleHamburger}
          >
            <div></div>
            {/* <div id="mid"></div>
          <div id="bot"></div> */}
          </button>
        </nav>

        <nav id="normal">
          <ul>
            <li>
              <NavLink href="/" label="Home" />
            </li>
            <li>
              <NavLink href="/portraits" label="Portraits" />
            </li>
            <li>
              <NavLink href="/casual" label="Casual" />
            </li>
            <li>
              <NavLink href="/eventsMarketing" label="Events&Marketing" />
            </li>
            <li>
              <NavLink href="/aboutMe" label="About Me" />
            </li>
          </ul>
        </nav>
      </header>
      <ul
        className={`mobile-menu ${active ? "active" : ""}`}
        onClick={closeMenu}
      >
        <li>
          <NavLink href="/" label="Home" />
        </li>
        <li>
          <NavLink href="/portraits" label="Portraits" />
        </li>
        <li>
          <NavLink href="/casual" label="Casual" />
        </li>
        <li>
          <NavLink href="/eventsMarketing" label="Events&Marketing" />
        </li>
        <li>
          <NavLink href="/aboutMe" label="About Me" />
        </li>
      </ul>
    </>
  );
}
