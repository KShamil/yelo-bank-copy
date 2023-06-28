import React, { FC } from "react";
import { UsefulProps } from "./Useful.props";
import styles from "./Useful.module.css";
import { CurrencyConverter } from "@/features/CurrencyConverter/CurrencyConverter";
import { YeloApp } from "@/features/YeloApp/YeloApp";
import { Htag } from "@/shared/Htag/Htag";

export const Useful: FC<UsefulProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            <Htag tag="h2">Sizin üçün faydalı</Htag>
          </div>
          <div className={styles.content}>
            <YeloApp />
            <CurrencyConverter />
          </div>
        </div>
      </section>
    </>
  );
};
