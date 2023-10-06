import React, { useEffect } from 'react'
import Swiper from 'swiper'
import {useSwiper} from 'swiper/react'
import styles from './Carousel.module.css'



const Carousel = ({data,componentRender}) => {

    const Controls = ({data}) => {
        const swiper= useSwiper()
        console.log(swiper)
        useEffect(()=>{
            swiper.slide(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[data])
    }
  return (
    <div className={styles.wrapper}>
        <Swiper style ={{padding:"0px 20px"}} intialSlide={0} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
         <Controls data={data}  />   
        </Swiper>   
    </div>
  )
}

export default Carousel