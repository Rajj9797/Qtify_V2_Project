import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRight.module.css";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
export default function CarouselRight() {
  const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd)
        })
    })
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}