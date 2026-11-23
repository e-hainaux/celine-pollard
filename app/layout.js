import "./globals.css";
import ScrollToTop from "@/hooks/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mon site vitrine",
  description: "Un site vitrine simple fait avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="body">
        <ScrollToTop />
        <Navbar />
        <main className="mainContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
