import React, { Component } from 'react'
import styles from './styles.css';
import { observer, inject } from 'mobx-react';
import Info from '../Info';

@inject('titleStore')

@observer export default class Search extends Component {
    render() {
        const titleStore = this.props.titleStore;
        return (
            <div className={styles.divSearch}>
                <form onSubmit={titleStore.fetchItems}>
                    <input className={styles.inputSearch}
                        value={titleStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={titleStore.setValue} />
                    <button className={styles.button} disabled={titleStore.stateSearchValue}>GO</button>
                </form>
                <Info />
            </div>
        )
    }
}
