import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as Leftarrow} from "../../assests/Leftarrow.svg"
import styles from './Carousel.module.css'


const CarouselLeftNavigation = () => {
  const swiper =useSwiper();
  const [isBegining,setIsBegining]=useState(swiper.isBegining)
//   useEffect(()=>{
//       swiper.on("slideChange",function(){
//           setIsBegining(swiper.isBegining)
//       })
//   },[])

    return (
    <div className={styles.leftNavigation}>
        {!isBegining&&<Leftarrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation