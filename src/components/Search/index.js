import React, { Component } from 'react'
import styles from './styles.css';

export default class Search extends Component {
    render() {
        return (
            <div className={styles.divSearch}>
                <form >
                    <input className={styles.inputSearch} type="search" placeholder="Search" />
                    <button className={styles.button}>GO</button>
                </form>
            </div>
        )
    }
}
