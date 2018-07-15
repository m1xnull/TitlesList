import React, { Component } from 'react';
import Item from '../Item';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')

@observer export default class Main extends Component {
  render() {
    const { titlesStore } = this.props;
    return (
      <div>
        {
          titlesStore.filteredData.map(item =>
            <Item key={item.id} data={item} />)
        }
      </div>
    )
  }
}