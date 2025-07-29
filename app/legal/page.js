import styles from "../../styles/legal.module.css";

export default function LegalPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>
      <p className={styles.text}>Texte des mentions légales ici.</p>
    </div>
  );
}
