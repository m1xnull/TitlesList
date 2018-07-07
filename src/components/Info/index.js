import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')

@observer export default class Info extends Component {
    renderStatus() {
        const { searchStatus } = this.props.titlesStore;
        switch (searchStatus) {
            case 'pending': return
            case 'loading': return <h3>Поиск статей</h3>
            case 'empty': return <h3>Ничего не найдено</h3>
            case 'error': return <h3>Ошибка</h3>
        }
    }

    render() {
        return <div>{this.renderStatus()}</div>
    }
}