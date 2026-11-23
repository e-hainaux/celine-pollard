import "./globals.css";
import styles from "./layout.module.css";
import ScrollToTop from "@/hooks/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Céline Pollard - Avocate",
  description:
    "Site officiel du cabinet de Maître Céline Pollard - SELARL Debarbieux Pollard - Cabinet d'avocat situé 12 boulevard Vauban 62000 Arras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="body">
        <ScrollToTop />
        <Navbar />
        <main className={styles.mainContainer}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
