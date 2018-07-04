import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Info from '../Info';

import Wrapper from './Wrapper';
import InputSearch from './InputSearch';
import Button from './Button';

@inject('titleStore')

@observer export default class Search extends Component {
    render() {
        const titleStore = this.props.titleStore;
        return (
            <Wrapper>
                <form onSubmit={titleStore.fetchItems}>
                    <InputSearch
                        value={titleStore.searchValue}
                        type="search"
                        placeholder="Search"
                        onChange={titleStore.setValue}
                    />
                    <Button disabled={titleStore.stateSearchValue}>GO</Button>
                </form>
                <Info />
            </Wrapper>
        )
    }
}
