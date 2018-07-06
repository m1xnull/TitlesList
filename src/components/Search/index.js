import React, { Component } from 'react'
import styles from './styles.css';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')

@observer export default class Search extends Component {

    setValue = event => {
        this.props.titlesStore.setValue(event.target.value);
    }

    render() {
        const {titlesStore} = this.props;
        
        return (
            <div className={styles.divSearch}>
                <form onSubmit={titlesStore.handlerValue}>
                    <input className={styles.inputSearch}
                        value={titlesStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={this.setValue} />
                    <button className={styles.button} disabled={!titlesStore.searchValue}>GO</button>
                </form>
            </div>
        )
    }
}
