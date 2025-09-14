import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeft.module.css";
import { FaArrowLeft } from "react-icons/fa";

export default function CarouselLeft() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  swiper.on("slideChange", () => {
    setIsBeginning(swiper.isBeginning);
  });

  return (
    <div className={styles.left}>
      {!isBeginning && <FaArrowLeft onClick={() => swiper.slidePrev()} />}
    </div>
  );
}