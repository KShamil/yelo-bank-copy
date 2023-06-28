import React, { FC } from "react";
import { StoriesItemsProps } from "./StoriesItems.props";
import styles from "./StoriesItems.module.css";
import { storiesData } from "@/data/data";
import { StoriesCard } from "@/entities/StoriesCard/StoriesCard";
import { Htag } from "@/shared/Htag/Htag";

export const StoriesItems: FC<StoriesItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            <Htag tag="h2">Storilər</Htag>
            <span className={styles.badge}>{storiesData.length}</span>
          </div>
          <div className={styles.stories}>
            {storiesData &&
              storiesData.map((item) => (
                <StoriesCard data={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
