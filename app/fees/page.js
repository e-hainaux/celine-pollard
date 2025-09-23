import styles from "../../styles/fees.module.css";

export default function FeesPage() {
  return (
    <div className={styles.container}>
      <div id="post-48" className={styles.post}>
        <h1 className={styles.title}>Honoraires</h1>

        <div className={styles.content}>
          <p className={`${styles.text} ${styles.bold}`}>
            La détermination des frais et des honoraires, ainsi que leurs
            modalités de règlement, sont discutées avec Maître Céline Pollard{" "}
            <span className={styles.underlined}>
              dès le premier rendez-vous.
            </span>
          </p>

          <p className={styles.text}>
            Le Cabinet fixe ses honoraires en toute transparence avec ses
            clients. Une convention d'honoraires reprenant la mission et les
            modalités d'intervention du Cabinet est systématiquement régularisée
            avec le Client dès la première rencontre.
          </p>

          <p className={styles.text}>
            Le Client est informé, dès le premier contact avec l'Avocat, du
            nombre prévisionnel d'heures indispensables à l'accomplissement de
            la mission confiée.
          </p>

          <p className={styles.text}>
            Pour plafonner le coût de l'Avocat et offrir une meilleure
            visibilité du coût final, un honoraire forfaitaire peut être
            proposé. Dans ce cas, un honoraire fixe est défini à l'avance et
            pour l'ensemble de la procédure. Ce mode de facturation est envisagé
            lorsque l'Avocat est en mesure d'estimer par avance le temps
            nécessaire au traitement du dossier, tenant compte également de la
            difficulté prévisible et de la valeur du litige.
          </p>

          <p className={styles.text}>
            Maître Céline Pollard abordera ces points et répondra à toutes vos
            questions dès la première rencontre pour vous assurer de la
            transparence du mode de fonctionnement et de facturation du Cabinet.
          </p>
        </div>
      </div>
    </div>
  );
}
