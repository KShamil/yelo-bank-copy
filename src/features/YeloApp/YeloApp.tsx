import React, { FC } from "react";
import { YeloAppProps } from "./YeloApp.props";
import styles from "./YeloApp.module.css";
import { Htag } from "@/shared/Htag/Htag";
import Image from "next/image";
import AppleStoreIcon from "./apple.svg";
import GooglePlayIcon from "./google_play.svg";
import AppGaleryIcon from "./huawei_play.svg";
import ScreenImg from './screen_app.jpg';
import MobileImg from './app_phone.webp';

export const YeloApp: FC<YeloAppProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.title}>
            <Htag tag="yeloapp-title">Yelo App</Htag>
            <p>
              Yelo-dan yeni və parlaq mobil əlavə. Hesablarını izlə, köçürmə və
              ödənişlərini sürətli et.
            </p>
          </div>
          <div className={styles.mobileApp}>
            <div className={styles.box}>
              <AppleStoreIcon className={styles.icon}/>
              <div className={styles.download}>
                <span>Yüklə</span>
                <b>App Store</b>
              </div>
            </div>
            <div className={styles.box}>
              <GooglePlayIcon className={styles.icon}/>
              <div className={styles.download}>
                <span>Yüklə</span>
                <b>Google Play</b>
              </div>
            </div>
            <div className={styles.box}>
              <AppGaleryIcon className={styles.icon}/>
              <div className={styles.download}>
                <span>Yüklə</span>
                <b>AppGallery</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.img}>
            <Image src={MobileImg} alt="" className={styles.photo}/>
            <div className={styles.innerImg}>
              <Image src={ScreenImg} alt='error' className={styles.innerPhoto}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
