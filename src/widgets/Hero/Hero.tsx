import React, { FC } from "react";
import { HeroProps } from "./Hero.props";
import styles from "./Hero.module.css";
import { YeloLight } from "@/features/YeloLight/YeloLight";
import { CreditCalculator } from "@/features/CreditCalculator/CreditCalculator";

export const Hero: FC<HeroProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <YeloLight />
          <CreditCalculator />
        </div>
      </section>
    </>
  );
};
