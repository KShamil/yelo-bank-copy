"use client"

import React, { FC } from "react";
import { HomeSliderProps } from "./HomeSlider.props";
import styles from "./HomeSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "@/data/data";
import { SliderItems } from "@/features/SliderItems/SliderItems";

export const HomeSlider: FC<HomeSliderProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          className={styles.swiper}
          speed={800}
          autoplay={{
            delay: 5000,
          }}
        >
          {sliderData &&
            sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderItems data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};
