import React from 'react'
import styles from './styles.css'

export default (props) => {
    return (
        <div className={styles.itemDiv}>

            <div className={styles.title}>
                <span>
                    {props.title}
                </span>
            </div>

            <div className={styles.greyBg}></div>

            <div className={styles.placeOfPublication}>
                <span>
                    {props.placeOfPublication}
                </span>
            </div>
            
        </div>
    )
}
