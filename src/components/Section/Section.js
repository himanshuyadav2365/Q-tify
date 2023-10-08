import React from 'react'
import styles from './Section.module.css'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
// import { type } from '@testing-library/user-event/dist/type'
import BasicTabs from '../Tabs/Tabs'

const Section = ({title,data,type,value,handleChange}) => {

    const [carouselToggle,setCarouselToggle]=useState(true)
    const handleToggle =()=>{
        setCarouselToggle(!carouselToggle)
    }
    
    return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {carouselToggle? "Show All" :"Collapse All"}
            </h4>
        </div>
        {type==="songs"?<BasicTabs value={value} handleChange={handleChange}/>:null}
        {
            !data?.length?(<CircularProgress/>):
            (<div className={styles.cardWrapper}>  
                {!carouselToggle ?
                <div className={styles.wrapper}>
                    {data.map((item)=>{
                        return <Card key={item.id} data={item} type={type}/>
                    })}
                </div> :(
                    <div className={styles.cardWrapper}>
                    <Carousel data={data} componentRender={(ele) => <Card data={ele} type={type}/>}/>
                    </div>
                )
                } 
              </div>  
            )
        }
    </div>
  )
}

export default Section