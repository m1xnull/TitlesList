import React, { Component } from 'react'
import styles from './styles.css';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')

@observer export default class Search extends Component {
    render() {
        const titlesStore = this.props.titlesStore;
        return (
            <div className={styles.divSearch}>
                <form onSubmit={titlesStore.handlerValue}>
                    <input className={styles.inputSearch}
                        value={titlesStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={titlesStore.setValue} />
                    <button className={styles.button} disabled={titlesStore.stateSearchValue}>GO</button>
                </form>
            </div>
        )
    }
}
