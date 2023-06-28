import React, { FC } from "react";
import { TopFotterProps } from "./TopFotter.props";
import styles from "./TopFotter.module.css";
import Link from "next/link";

export const TopFotter: FC<TopFotterProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Fərdi</h3>
          <ul className={styles.list}>
            <li>
              <Link href="" className={styles.link}>
                Kreditlər
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Kartlar
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Əmanətlər
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Pul köçürmələri
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Kart xidmətləri
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Tariflər
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3>Biznes</h3>
          <ul className={styles.list}>
            <li>
              <Link href="" className={styles.link}>
                Biznes Kreditlər
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Kartlar
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Biznes xidmətlər
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3>Bank haqqında</h3>
          <ul className={styles.list}>
            <li>
              <Link href="" className={styles.link}>
                Rəhbərlik
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Karyera
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Hesabatlar
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Komitələr
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Sənədlər
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Xəbərlər
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3>Onlayn xidmətlər</h3>
          <ul className={styles.list}>
            <li>
              <Link href="" className={styles.link}>
                Online kredit sifarişi
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Kart sifarişi
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Online kredit ödənişi
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Onlayn ödəmə
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Onlayn növbə
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                ƏDV geri al
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
