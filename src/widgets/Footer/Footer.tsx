import React, { FC } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { TopFotter } from "@/features/TopFooter/TopFotter";
import { MiddleFooter } from "@/features/MiddleFooter/MiddleFooter";
import { BottomFooter } from "@/features/BottomFooter/BottomFooter";

export const Footer: FC<FooterProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <footer {...props} className={styles.wrapper}>
        <TopFotter />
        <MiddleFooter />
        <BottomFooter />
      </footer>
    </>
  );
};
