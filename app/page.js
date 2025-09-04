import styles from "../styles/home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        L’EXPERIENCE ET LES COMPETENCES
        <br />
        <span>AU SERVICE EXCLUSIF DE VOS INTERETS</span>
        Selarl Debarbieux Pollard, société d’avocats en droit privé à Arras.
      </h1>
      <p className={styles.text}>
        Un accompagnement soigné et personnalisé en droit des contrats, doit de
        l’immobilier et de la construction, droit commercial et responsabilité
        civile dans les Hauts de France.
      </p>
      <h2 className={styles.subtitle}>
        Une problématique à résoudre ou un projet à réaliser ?
        <br />
        <span>
          Une rencontre vaudra toujours mieux qu’une longue publication.
        </span>
      </h2>
      <p className={styles.contactNumber}>
        Prenez rendez-vous. <br />
        03 21 71 98 60
      </p>
      <p className={styles.orangeBoldText}>
        Une expérience et un savoir-faire sans cesse mis en avant et la volonté
        de perpétuer une réputation basée sur le sérieux des compétences.
      </p>
      <p className={styles.text}>
        Le CABINET DEBARBIEUX POLLARD vous accueille dans ses nouveaux locaux
        situés au 12 Boulevard Vauban à Arras.
        <br />
        Vous y serez accueillis par Maître Céline POLLARD, titulaire d’un Master
        2, spécialités notariales et judiciaires, obtenu à l’Université
        Catholique de Lille.
      </p>
      <p className={styles.orangeText}>
        En matière de contrat, rien n’échappe à notre vigilance.
      </p>
      <p className={styles.text}>
        La Selarl Debarbieux Pollard sera votre soutien infaillible.
      </p>
      <p className={styles.orangeBoldText}>
        Notre objectif : servir et défendre vos intérêts.
      </p>
    </div>
  );
}
