import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as Rightarrow} from "../../assests/Rightarrow.svg"
import styles from './Carousel.module.css'


const CarouselRightNavigation = () => {
  const swiper =useSwiper();
  const [isEnd,setIsEnd]=useState(swiper.isEnd)
  useEffect(()=>{
      swiper.on("slideChange",function(){
          setIsEnd(swiper.isEnd)
      })
  },[])

    return (
    <div className={styles.rightNavigation}>
        {!isEnd && <Rightarrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation