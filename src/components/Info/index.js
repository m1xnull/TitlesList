import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('titleStore')

@observer export default class Info extends Component {
    loadItem = () => {
        const statusSearch = this.props.titleStore.stateSearch;

        switch (statusSearch) {
            case 'pending': return
            case 'loading': return <h3>Поиск статей</h3>
            case 'empty': return <h3>Ничего не найдено</h3>
            case 'error': return <h3>Ошибка</h3>
        }
    }

    render() {
        const titleStore = this.props.titleStore;
        return (
            <div>
                {this.loadItem()}
            </div>
        );
    }
}
