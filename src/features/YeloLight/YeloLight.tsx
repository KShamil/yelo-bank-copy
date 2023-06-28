import React, { FC } from "react";
import { YeloLightProps } from "./YeloLight.props";
import styles from "./YeloLight.module.css";
import { Button } from '@/shared/Button/Button';
import YeloCard from './card.webp';
import Image from 'next/image';

export const YeloLight: FC<YeloLightProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.top}>
            <h3>Yelo Light</h3>
            <p>İstənilən ödənişlər üçün doğru seçim</p>
          </div>
          <div className={styles.middle}>
            <div className={styles.box}>
              <span>Qalığa gəlir</span>
              <b>4%</b>
            </div>
            <div className={styles.box}>
              <span>Cashback</span>
              <b>30%-dək</b>
            </div>
          </div>
          <div className={styles.bottom}>
            <Button appearance='yelo-light-btn'>Sifariş et</Button>
          </div>
        </div>
        <div className={styles.image}>
            <Image src={YeloCard} alt='error' className={styles.img}/>
        </div>
      </div>
    </>
  );
};
