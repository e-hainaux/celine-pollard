import styles from "./legal.module.css";

export default function LegalPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>1. Éditeur du site</h2>

        <p className={styles.text}>
          Le présent site est édité par le Cabinet DEBARBIEUX POLLARD,
          représenté par Maître Céline POLLARD, avocate.
        </p>

        <p className={styles.text}>
          Adresse professionnelle : 12 Boulevard Vauban, 62000 Arras.
          <br />
          Téléphone : 03 21 71 98 60
          <br />
          Adresse e-mail : [Adresse e-mail du cabinet]
          <br />
          Barreau : [Barreau d'appartenance]
          <br />
          Structure d'exercice : [Forme juridique ou mode d'exercice]
          <br />
          Numéro SIRET : [Numéro SIRET, si applicable]
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>2. Directeur de la publication</h2>

        <p className={styles.text}>
          La directrice de la publication du présent site est Maître Céline
          POLLARD.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>3. Hébergement du site</h2>

        <p className={styles.text}>Le site est hébergé par :</p>

        <p className={styles.text}>
          [Nom de la société d'hébergement]
          <br />
          [Adresse de l'hébergeur]
          <br />
          [Numéro de téléphone de l'hébergeur]
          <br />
          Site internet : [Adresse du site de l'hébergeur]
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>4. Propriété intellectuelle</h2>

        <p className={styles.text}>
          L'ensemble des éléments présents sur ce site, notamment les textes,
          photographies, images, graphismes, logos et éléments visuels, est
          protégé par les dispositions relatives à la propriété intellectuelle.
        </p>

        <p className={styles.text}>
          Toute reproduction, représentation, modification ou exploitation,
          totale ou partielle, de ces éléments sans autorisation préalable est
          interdite, sauf disposition légale contraire.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>5. Responsabilité</h2>

        <p className={styles.text}>
          Les informations diffusées sur ce site sont fournies à titre
          informatif et ne constituent pas une consultation juridique
          personnalisée.
        </p>

        <p className={styles.text}>
          Le cabinet s'efforce de fournir des informations exactes et
          régulièrement mises à jour. Toutefois, il ne saurait garantir
          l'exhaustivité ou l'actualité permanente des contenus publiés.
        </p>

        <p className={styles.text}>
          L'utilisation des informations présentes sur ce site relève de la
          responsabilité de l'utilisateur.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>6. Liens hypertextes</h2>

        <p className={styles.text}>
          Le site peut contenir des liens vers des sites internet tiers. Le
          cabinet ne peut être tenu responsable du contenu ou du fonctionnement
          de ces sites externes.
        </p>
      </section>

      <p className={styles.update}>
        Dernière mise à jour : [Date de mise à jour]
      </p>
    </div>
  );
}
