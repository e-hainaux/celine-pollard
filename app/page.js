import styles from "../styles/skills.module.css";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        L’EXPERIENCE ET LES COMPETENCES
        <br />
        <span className={styles.highlight}>
          AU SERVICE EXCLUSIF DE VOS INTERETS
        </span>
        <br />
        Selarl Debarbieux Pollard, société d’avocats en droit privé à Arras.
      </h1>

      <p className={styles.detail}>
        Un accompagnement soigné et personnalisé en droit des contrats, droit de
        l’immobilier et de la construction, droit commercial et responsabilité
        civile dans les Hauts de France.
      </p>

      <h2 className={styles.subtitle}>
        Une problématique à résoudre ou un projet à réaliser ?
        <br />
        <span className={styles.highlight}>
          Une rencontre vaudra toujours mieux qu’une longue publication.
        </span>
      </h2>

      <p className={styles.contactPrompt}>
        Prenez rendez-vous. <br />
        <strong className={styles.highlight}>03 21 71 98 60</strong>
      </p>

      <p className={styles.highlight}>
        Une expérience et un savoir-faire sans cesse mis en avant et la volonté
        de perpétuer une réputation basée sur le sérieux des compétences.
      </p>

      <p className={styles.detail}>
        Le CABINET DEBARBIEUX POLLARD vous accueille dans ses nouveaux locaux
        situés au 12 Boulevard Vauban à Arras.
        <br />
        Vous y serez accueillis par Maître Céline POLLARD, titulaire d’un Master
        2, spécialités notariales et judiciaires, obtenu à l’Université
        Catholique de Lille.
      </p>

      <p className={styles.highlight}>
        En matière de contrat, rien n’échappe à notre vigilance.
      </p>

      <p className={styles.detail}>
        La Selarl Debarbieux Pollard sera votre soutien infaillible.
      </p>

      <p className={styles.highlight}>
        Notre objectif : servir et défendre vos intérêts.
      </p>
    </div>
  );
}
