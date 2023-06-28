import React, { FC } from "react";
import { SliderItemsProps } from "./SliderItems.props";
import styles from "./SliderItems.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "./blue_arr.svg";

export const SliderItems: FC<SliderItemsProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { title, descr, btn, link, img, display,linkDisplay } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.info}>
              <Htag tag="h1">{title}</Htag>
              <p>{descr}</p>
            </div>
            <div className={styles.links}>
              <Button appearance="slider-btn" style={{ display: `${display}` }}>
                {btn}
              </Button>
              <Link href="" className={styles.link} style={{ display: `${linkDisplay}` }}>
                <span>{link}</span>
                <ArrowIcon className={styles.icon}/>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <Image className={styles.img} src={img} alt="error" />
          </div>
        </div>
      </div>
    </>
  );
};
