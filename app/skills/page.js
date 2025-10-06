import styles from "../../styles/skills.module.css";

export default function SkillsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Compétences</h1>

      <p className={styles.keywords}>
        INFORMATION – CONSEIL – RÉDACTION – ASSISTANCE – REPRÉSENTATION –
        DÉFENSE
      </p>

      <p className={styles.intro}>
        Maître Céline Pollard pratique exclusivement le droit privé et tout
        particulièrement dans les domaines suivants :
      </p>

      <ul className={styles.domainsList}>
        <li className={styles.domainItem}>Droit des contrats</li>
        <li className={styles.domainItem}>Recouvrement de créances</li>
        <li className={styles.domainItem}>Droit commercial</li>
        <li className={styles.domainItem}>Responsabilité civile</li>
        <li className={styles.domainItem}>
          Droit immobilier et de la construction
        </li>
      </ul>

      <p className={styles.contactPrompt}>
        <strong className={styles.highlight}>
          Une question sur les domaines d’intervention du Cabinet ?
        </strong>
        <br />
        N’hésitez pas à nous contacter.
      </p>

      <p className={styles.detail}>
        Maître Céline Pollard reste à votre écoute pour vous apporter des
        solutions concrètes et vous accompagner dans toutes vos démarches et en
        dehors même de tout contentieux.
      </p>

      <p className={styles.emphasis}>
        <em>N’attendez pas le procès pour nous consulter.</em>
      </p>

      <p className={styles.detail}>
        Maître Céline Pollard vous informe et vous conseille sur vos droits et
        obligations. Elle vous assiste aussi dans toute tentative de règlement
        amiable de vos litiges pour parvenir à un résultat qui puisse vous
        satisfaire.
      </p>

      <p className={styles.detail}>
        Le Cabinet se charge également de la rédaction d’actes juridiques et
        plus généralement vos correspondances, qu’elles soient contentieuses ou
        non.
      </p>
    </main>
  );
}
