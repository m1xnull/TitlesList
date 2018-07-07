import React from 'react'
import styles from './styles.css'

export default (props) => {
    const { data } = props;

    return (
        <div className={styles.itemDiv}>
            <div className={styles.title}>
                <span>
                    {data.title}
                </span>
            </div>

            <div className={styles.greyBg}></div>

            <div className={styles.placeOfPublication}>
                <span>
                    {data.placeOfPublication}
                </span>
            </div>
        </div>
    )
}
