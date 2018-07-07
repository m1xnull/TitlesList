import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Info from '../Info';

import { Wrapper, InputSearch, Button } from './styles.js'

@inject('titlesStore')

@observer export default class Search extends Component {
    setValue = event => {
        this.props.titlesStore.setValue(event.target.value);
    }

    handlerValue = event => {
        event.preventDefault();
        this.props.titlesStore.fetchItems();
    }

    render() {
        const { titlesStore } = this.props;

        return (
            <Wrapper>
                <form onSubmit={this.handlerValue}>
                    <InputSearch
                        value={titlesStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={this.setValue} />
                    <Button disabled={!titlesStore.searchValue}>GO</Button>
                </form>
                <Info />
            </Wrapper>
        )
    }
}
