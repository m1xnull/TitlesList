import React, { Component } from 'react'
import styles from './styles.css';
import { observer, inject } from 'mobx-react';
import Info from '../Info';

@inject('titlesStore')

@observer export default class Search extends Component {
    setValue = event => {
        this.props.titlesStore.setValue(event.target.value);
    }

    handlerValue = event => {
        event.preventDefault();
        this.props.titlesStore.handlerValue();
    }

    render() {
        const { titlesStore } = this.props;
        return (
            <div className={styles.divSearch}>
                <form onSubmit={titlesStore.fetchItems}>
                    <input className={styles.inputSearch}
                        value={titlesStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={this.setValue} />
                    <button className={styles.button} disabled={!titlesStore.searchValue}>GO</button>
                </form>
                <Info />
            </div>
        )
    }
}
