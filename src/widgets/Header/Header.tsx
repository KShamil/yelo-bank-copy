"use client"

import React, { FC, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Link from "next/link";
import LocationIcon from "./icons/ht_location.svg";
import PhoneIcon from "./icons/phone.svg";
import SearchIcon from "./icons/search_header.svg";
import DownArrowIcon from "./icons/s_curr.svg";

export const Header: FC<HeaderProps> = ({ ...props }): JSX.Element => {

  const [isActive,setIsActive] = useState<boolean>(false);

  const handleActiveLink = () => {
    setIsActive(true);
  }
  return (
    <>
      <header {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <ul className={styles.list}>
              <li>
                <Link href="" className={`${styles.navLink} ${isActive ? styles.activeNavlink : ''}` } onClick={handleActiveLink}>Fərdi</Link>
              </li>
              <li>
                <Link href="" className={styles.navLink}>Biznes</Link>
              </li>
              <li>
                <Link href="" className={styles.navLink}>Bank haqqında</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul className={styles.list}>
              <li>
                <Link href="" className={styles.link}>
                  <span>Onlayn növbə</span>
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link}>
                  <LocationIcon />
                  <span>ATM və Filiallar</span>
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link}>
                  <PhoneIcon />
                  <span>981</span>
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link}>
                  <SearchIcon />
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link}>
                  <span>AZ</span>
                  <DownArrowIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
