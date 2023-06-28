import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { Stories } from "@/widgets/Stories/Stories";
import { LastNews } from "@/widgets/LastNews/LastNews";
import { HomeHeaderMenu } from "@/features/HomeHeaderMenu/HomeHeaderMenu";
import { HomeSlider } from "@/widgets/HomeSlider/HomeSlider";
import { Hero } from "@/widgets/Hero/Hero";
import { Useful } from "@/widgets/Useful/Useful";

export const metadata: Metadata = {
  title: "Yellow Bank - Muasir Bank Xidmətləri",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeaderMenu />
      <HomeSlider />
      <Stories />
      <Hero />
      <Useful />
      <LastNews />
    </main>
  );
}
