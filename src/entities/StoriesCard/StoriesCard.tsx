import React, { FC } from "react";
import { StoriesCardProps } from "./StoriesCard.props";
import styles from "./StoriesCard.module.css";
import Image from "next/image";

export const StoriesCard: FC<StoriesCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { title, description, img, bgColor } = data;

  return (
    <>
      <div
        {...props}
        className={styles.wrapper}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <span className={styles.badge}>{title}</span>
        <p>{description}</p>
        <Image src={img} alt={title} width={140} height={140} className={styles.image}/>
      </div>
    </>
  );
};
