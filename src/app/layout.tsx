import { Header } from "@/widgets/Header/Header";
import { Noto_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import styles from "./layout.module.css";
import { Footer } from "@/widgets/Footer/Footer";
import "./globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
