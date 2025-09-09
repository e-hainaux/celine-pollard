import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
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
