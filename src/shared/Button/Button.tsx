import React, { FC } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from 'classnames'

export const Button: FC<ButtonProps> = ({
  className,
  appearance,
  children,
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={cn(styles.button,className, {
        [styles.yellowHeaderBtn]: appearance == "yellow-header-btn",
        [styles.burgerBtn]: appearance == "burger-btn",
        [styles.sliderBtn]: appearance == "slider-btn",
        [styles.yeloLightBtn]: appearance == "yelo-light-btn",
        [styles.calcBtn]: appearance == "calc-btn",
        [styles.allNewsBtn]: appearance == "all-news-btn",
        [styles.circleHeaderBtn]: appearance == "circle-header-btn",
      })}
    >
      {children}
    </button>
  );
};
