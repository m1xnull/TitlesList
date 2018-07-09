import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Info from '../Info';

import { Wrapper, InputSearch, Button } from './styles.js'

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
            <Wrapper>
                <form onSubmit={this.onSubmit}>
                    <InputSearch 
                        value={titlesStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={this.onChange}
                    />
                    <Button disabled={!titlesStore.searchValue}>GO</Button>
                </form>
                <Info />
            </Wrapper>
        )
    }
}
