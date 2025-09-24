import Link from "next/link";

import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} ehweb.fr - Tous droits réservés.
      </p>
      <p className={styles.text}>
        <Link className={styles.link} href="/legal">
          Mentions légales
        </Link>
      </p>
    </footer>
  );
}
