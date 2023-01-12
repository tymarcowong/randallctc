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
  if (usePathname() === href) {
    className += "active";
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">RANDALL.CTC</Link>
      </h1>
      <nav>
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
  );
}
