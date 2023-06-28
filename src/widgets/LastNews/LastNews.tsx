import React, { FC } from "react";
import { LastNewsProps } from "./LastNews.props";
import styles from "./LastNews.module.css";
import { newsData } from "@/data/data";
import { Htag } from "@/shared/Htag/Htag";
import { NewsCard } from "@/entities/NewsCard/NewsCard";
import { Button } from "@/shared/Button/Button";
import BlueArrowIcon from "./blue_arr.svg";
import Link from "next/link";

export const LastNews: FC<LastNewsProps> = ({ ...props }): JSX.Element => {
  const sliceData = newsData.slice(0, 3);
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            <Htag tag="h2">Son xəbərlər</Htag>
          </div>
          <div className={styles.news}>
            {sliceData &&
              sliceData.map((item) => <NewsCard key={item.id} data={item} />)}
          </div>
          <div className={styles.btnBlock}>
            <Button appearance="all-news-btn">
              <Link href="/news" className={styles.btn}>
                <span>Bütün xəbərlər</span>
                <BlueArrowIcon className={styles.icon} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
