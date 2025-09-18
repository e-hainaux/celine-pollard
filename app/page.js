import Image from "next/image";
import { Users, MapPin, Phone, BookOpen, Search, Shield } from "lucide-react";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.main}>
      {/* Section héro */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            L'expérience et les compétences
            <span className={styles.highlight}>
              au service exclusif de vos intérêts
            </span>
          </h1>
          <p className={styles.subtitle}>
            Selarl Debarbieux Pollard, société d'avocats en droit privé à Arras.
          </p>
        </div>
      </section>

      {/* Section services */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesCard}>
          {/* <Users className={styles.icon} size={32} /> */}
          <div>
            <Image
              src="/celine-black-totheright.jpg"
              width={429}
              height={500}
              alt="Photographie de Céline Pollard"
            />
          </div>
          <p className={styles.servicesText}>
            Un accompagnement soigné et personnalisé en droit des contrats,
            droit de l'immobilier et de la construction, droit commercial et
            responsabilité civile dans les Hauts de France.
          </p>
        </div>
      </section>

      {/* Section contact */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <h2 className={styles.sectionTitle}>
            Une problématique à résoudre ou un projet à réaliser ?
          </h2>
          <p className={styles.contactHighlight}>
            Une rencontre vaudra toujours mieux qu'une longue publication.
          </p>
          <div className={styles.contactInfo}>
            <Phone className={styles.phoneIcon} size={24} />
            <div>
              <p className={styles.contactText}>Prenez rendez-vous</p>
              <p className={styles.phoneNumber}>03 21 71 98 60</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section expertise */}
      <section className={styles.expertiseSection}>
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseCard}>
            <BookOpen className={styles.icon} size={28} />
            <p className={styles.expertiseText}>
              Une expérience et un savoir-faire sans cesse mis en avant et la
              volonté de perpétuer une réputation basée sur le sérieux des
              compétences.
            </p>
          </div>
          <div className={styles.expertiseCard}>
            <Search className={styles.icon} size={28} />
            <p className={styles.expertiseText}>
              En matière de contrat, rien n'échappe à notre vigilance.
            </p>
          </div>
        </div>
      </section>

      {/* Section cabinet */}
      <section className={styles.cabinetSection}>
        <div className={styles.cabinetCard}>
          <MapPin className={styles.icon} size={32} />
          <div className={styles.cabinetContent}>
            <h3 className={styles.cabinetTitle}>Notre Cabinet</h3>
            <p className={styles.cabinetText}>
              Le CABINET DEBARBIEUX POLLARD vous accueille dans ses nouveaux
              locaux situés au 12 Boulevard Vauban à Arras.
            </p>
            <p className={styles.cabinetText}>
              Vous y serez accueillis par Maître Céline POLLARD, titulaire d'un
              Master 2, spécialités notariales et judiciaires, obtenu à
              l'Université Catholique de Lille.
            </p>
          </div>
        </div>
      </section>

      {/* Section objectif */}
      <section className={styles.objectiveSection}>
        <div className={styles.objectiveCard}>
          <Shield className={styles.icon} size={32} />
          <div className={styles.objectiveContent}>
            <p className={styles.objectiveText}>
              La Selarl Debarbieux Pollard sera votre soutien infaillible.
            </p>
            <p className={styles.objectiveHighlight}>
              Notre objectif : servir et défendre vos intérêts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
