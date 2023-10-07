import React from 'react'
import styles from './Takehome.module.css'


const Takehome = () => {
  return (

    <div className={styles.wrapper}>
        <input className={styles.ele}/>
        <input className={styles.ele}/>
        <input className={styles.ele}/>
        <button className={styles.ele}>Submit</button>
    </div>
  )
}

export default Takehome