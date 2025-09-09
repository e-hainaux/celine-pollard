"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.link} href="/">
            CÉLINE POLLARD
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            LOGO
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/skills">
            COMPÉTENCES
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/fees">
            HONORAIRES
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
