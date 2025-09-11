import styles from "./page.module.css";
import {
  FaBalanceScale,
  FaHandshake,
  FaBuilding,
  FaPhoneAlt,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <section className={styles.card}>
        <div className={styles.iconWrapper}>
          <FaHandshake className={styles.icon} />
        </div>
        <h1 className={styles.title}>
          L’EXPERIENCE ET LES COMPETENCES
          <br />
          <span className={styles.highlight}>
            AU SERVICE EXCLUSIF DE VOS INTERETS
          </span>
        </h1>
        <p className={styles.detail}>
          Selarl Debarbieux Pollard, société d’avocats en droit privé à Arras.
        </p>
      </section>

      <section className={styles.cardAlt}>
        <div className={styles.iconWrapper}>
          <FaBalanceScale className={styles.icon} />
        </div>
        <h2 className={styles.subtitle}>
          Une problématique à résoudre ou un projet à réaliser ?
        </h2>
        <p className={styles.detail}>
          <span className={styles.highlight}>
            Une rencontre vaudra toujours mieux qu’une longue publication.
          </span>
        </p>
        <p className={styles.contactPrompt}>
          <FaPhoneAlt /> Prenez rendez-vous :{" "}
          <strong className={styles.highlight}>03 21 71 98 60</strong>
        </p>
      </section>

      <section className={styles.card}>
        <div className={styles.iconWrapper}>
          <FaBuilding className={styles.icon} />
        </div>
        <p className={styles.detail}>
          Le CABINET DEBARBIEUX POLLARD vous accueille dans ses nouveaux locaux
          situés au <strong>12 Boulevard Vauban à Arras</strong>.
        </p>
      </section>
    </div>
  );
}
