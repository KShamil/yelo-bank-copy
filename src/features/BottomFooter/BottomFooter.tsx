import React, { FC } from "react";
import { BottomFooterProps } from "./BottomFooter.props";
import styles from "./BottomFooter.module.css";
import Link from "next/link";
import LogoIcon from "./logo.svg";

export const BottomFooter: FC<BottomFooterProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.logo}>
          <LogoIcon className={styles.logoIcon}/>
        </div>
        <div className={styles.info}>
          <span>
            © 2023 Yelo Bank | AR MB tərəfindən 25 fevral 1994-cü il tarixində
            verilmiş 203 saylı lisenziya
          </span>
          <ul className={styles.list}>
            <li>
              <Link href="" className={styles.link}>
                E-portal
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                ADİF
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                infobank.az
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                Qarabağ Dirçəliş Fondu
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                YAŞAT Fondu
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.autor}>
          <span>Site by</span>
          <strong>Shamil Kurbanov</strong>
        </div>
      </div>
    </>
  );
};
