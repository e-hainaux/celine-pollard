"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Vérifier la taille d'écran au montage
    checkMobile();

    // Ajouter les listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const isActive = (href) => {
    return pathname === href || pathname === href + "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // N'appliquer l'effet de scroll que sur desktop
  const shouldApplyScrollEffect = scrolled && !isMobile;

  return (
    <nav
      className={`${styles.nav} ${
        shouldApplyScrollEffect ? styles.navScrolled : ""
      }`}
    >
      {/* Logo et burger pour mobile */}
      <div className={styles.navHeader}>
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
          <Image
            src="/logo-avocat.webp"
            alt="Logo Céline Pollard"
            width={40}
            height={40}
            priority
          />
        </Link>

        <button
          className={`${styles.burgerButton} ${
            isMenuOpen ? styles.burgerOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu de navigation */}
      <ul
        className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}
      >
        <li>
          <Link
            href="/"
            className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
            onClick={closeMenu}
          >
            CÉLINE POLLARD
          </Link>
        </li>
        <li className={styles.logoDesktop}>
          <Image
            src="/logo-avocat.webp"
            alt="Logo Céline Pollard"
            width={48}
            height={48}
            priority
          />
        </li>
        <li>
          <Link
            href="/skills"
            className={`${styles.link} ${
              isActive("/skills") ? styles.active : ""
            }`}
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Overlay pour fermer le menu en cliquant à côté */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </nav>
  );
}
