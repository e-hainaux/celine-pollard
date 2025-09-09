"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    return pathname === href || pathname === href + "/";
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
          >
            CÉLINE POLLARD
          </Link>
        </li>
        <li>
          <Link className={styles.logo} href="#">
            LOGO
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`${styles.link} ${
              isActive("/skills") ? styles.active : ""
            }`}
          >
            COMPÉTENCES
          </Link>
        </li>
        <li>
          <Link
            href="/fees"
            className={`${styles.link} ${
              isActive("/fees") ? styles.active : ""
            }`}
          >
            HONORAIRES
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${styles.link} ${
              isActive("/contact") ? styles.active : ""
            }`}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
