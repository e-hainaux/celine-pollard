import styles from "../styles/home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue</h1>
      <p className={styles.text}>Bienvenue sur mon site vitrine !</p>
    </div>
  );
}
