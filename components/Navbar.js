import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.link} href="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/skills">
            Compétences
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/fees">
            Honoraires
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
