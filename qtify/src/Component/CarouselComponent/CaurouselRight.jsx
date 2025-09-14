import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRight.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function CarouselRight() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  swiper.on("slideChange", () => {
    setIsEnd(swiper.isEnd);
  });

  return (
    <div className={styles.right}>
        {!isEnd && <FaArrowRight onClick={() => swiper.slideNext()} />}
    </div>
    );
}