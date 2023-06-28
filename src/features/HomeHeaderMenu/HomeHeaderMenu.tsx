"use client";

import React, { FC, useEffect, useState } from "react";
import { HomeHeaderMenuProps } from "./HomeHeaderMenu.props";
import styles from "./HomeHeaderMenu.module.css";
import Link from "next/link";
import LogoIcon from "./logo.svg";
import BtnIcon from "./o_banking.svg";
import { Button } from "@/shared/Button/Button";

export const HomeHeaderMenu: FC<HomeHeaderMenuProps> = ({
  ...props
}): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isScrolledBtn, setIsScrolledBtn] = useState<boolean>(false);

  const button = isScrolledBtn ? (
    <Button appearance="circle-header-btn" className={styles.btn}>
      <BtnIcon className={styles.icon} />
    </Button>
  ) : (
    <Button appearance="yellow-header-btn">İnternet Bank</Button>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 45) {
        setIsScrolled(true);
        setIsScrolledBtn(true);
      } else {
        setIsScrolled(false);
        setIsScrolledBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        {...props}
        className={`${styles.wrapper} ${
          isScrolled ? styles.scrolledWrapper : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <LogoIcon className={styles.logoIcon} />
            </div>
            <nav>
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
                    Cashback
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.right}>
            {button}
            <Button appearance="burger-btn">
              <span className={styles.span}></span>
              <span className={styles.span}></span>
              <span className={styles.span}></span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
