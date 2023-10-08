import React from 'react'
import styles from './Card.module.css'
import {Chip,Tooltip} from '@mui/material'

const Card = ({data,type}) => {
  
    const getCard=(type)=>{
        switch(type){
            case "album" : {
                const {image ,follows,title,songs}=data;
                return (
                    <Tooltip titile={ `${songs?.length} songs`} placement="top" arrow>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} height={170}  width={160} alt ="album"/>
                                <div className={styles.banner}>
                                    <Chip className={styles.chip} label={`${follows} Follows`} size="small"/>
                                </div>
                            </div>
                            <div className={styles.titlewrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip>    
                )
            }

            case "songs" :{
                const {image, likes,title}=data;
                return (
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} height={170}  width={160} alt ="song"  />
                                <div className={styles.banner}>
                                    <Chip className={styles.chip} label={`${likes} Likes`} size="small"/>
                                </div>
                            </div>
                            <div className={styles.titlewrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                )
            }
            default: return <></>

        }
    }
    return getCard(type)
}

export default Card