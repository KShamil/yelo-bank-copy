import React, { FC } from "react";
import { MiddleFooterProps } from "./MiddleFooter.props";
import styles from "./MiddleFooter.module.css";
import FbIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";
import LinkedinIcon from "./linkedin.svg";
import YoutubeIcon from "./youtube.svg";
import TwitterIcon from "./twitter.svg";

export const MiddleFooter: FC<MiddleFooterProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.socialMedia}>
          <div className={styles.circle}>
            <FbIcon className={styles.icon} />
          </div>
          <div className={styles.circle}>
            <InstagramIcon className={styles.icon} />
          </div>
          <div className={styles.circle}>
            <LinkedinIcon className={styles.icon} />
          </div>
          <div className={styles.circle}>
            <YoutubeIcon className={styles.icon} />
          </div>
          <div className={styles.circle}>
            <TwitterIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.adress}>
            <span>Bizi tap</span>
            <b>Həsən bəy Zərdabi pros. 81k</b>
          </div>
          <div className={styles.phone}>
            <span>Əlaqə nömrəsi</span>
            <b>981</b>
          </div>
          <div className={styles.email}>
            <span>Bizə yazın</span>
            <b>bank@yelo.az</b>
          </div>
        </div>
      </div>
    </>
  );
};
