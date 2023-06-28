import React, { FC } from "react";
import { StoriesProps } from "./Stories.props";
import styles from "./Stories.module.css";
import { StoriesItems } from "@/features/StoriesItems/StoriesItems";

export const Stories: FC<StoriesProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <StoriesItems />
      </section>
    </>
  );
};
