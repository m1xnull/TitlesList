import React, { Component } from 'react'
import styles from './styles.css';
import { observer, inject } from 'mobx-react';
import Info from '../Info';

@inject('titlesStore')

@observer export default class Search extends Component {
    onChange = event => {
        this.props.titlesStore.setValue(event.target.value);
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.titlesStore.fetchArticles();
    }

    render() {
        const { titlesStore } = this.props;

        return (
            <div className={styles.divSearch}>
                <form onSubmit={this.onSubmit}>
                    <input
                        className={styles.inputSearch}
                        value={titlesStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={this.onChange}
                    />
                    <button className={styles.button} disabled={!titlesStore.searchValue}>GO</button>
                </form>
                <Info />
            </div>
        )
    }
}
