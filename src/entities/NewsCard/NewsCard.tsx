import React, { FC } from "react";
import { NewsCardProps } from "./NewsCard.props";
import styles from "./NewsCard.module.css";
import { Htag } from "@/shared/Htag/Htag";
import Link from "next/link";
import BlueArrowIcon from "./blue_arr.svg";

export const NewsCard: FC<NewsCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { title, link, date } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Htag tag="h3">{title}</Htag>
        <div className={styles.info}>
          <Link href="" className={styles.link}>
            <span>{link}</span>
            <BlueArrowIcon className={styles.icon}/>
          </Link>
          <time dateTime={date}>{date}</time>
        </div>
      </div>
    </>
  );
};
