import styles from "../../styles/contact.module.css";
import { Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact</h1>

      <div className={styles.contactInfo}>
        <div className={styles.phoneSection}>
          <div className={styles.phoneContainer}>
            <Phone className={styles.phoneIcon} />
            <h2 className={styles.phone}>03 21 71 98 60</h2>
          </div>
        </div>

        <div className={styles.hoursSection}>
          <p className={styles.text}>
            L'accueil téléphonique est ouvert du lundi au vendredi,
          </p>
          <p className={styles.highlight}>Prise de rendez-vous par téléphone</p>
          <p className={styles.hours}>De 8H30 à 19H30 – SANS INTERRUPTION</p>
        </div>

        <div className={styles.emailSection}>
          <a href="mailto:celine.pollard@avocat.fr" className={styles.email}>
            celine.pollard@avocat.fr
          </a>
        </div>

        <div className={styles.onlineSection}>
          <p className={styles.text}>
            Ou en ligne en cliquant sur le lien suivant :
          </p>
          <div className={styles.meetlawSection}>
            <a
              href="https://rdv.meetlaw.fr/rdv/7360-cabinet-debarbieux-pollard"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.meetlawLink}
            >
              <img
                src="/meetlaw-link-image.png"
                alt="Prendre rendez-vous en ligne avec Meet Law"
                className={styles.meetlawImage}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
