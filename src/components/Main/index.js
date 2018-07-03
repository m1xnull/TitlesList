import React, { Component } from 'react';
import Item from '../Item';
import { observer, inject } from 'mobx-react';

@inject('titleStore')

@observer export default class Main extends Component {
  render() {
    const titleStore = this.props.titleStore;
    return (
      <div>
        {
          titleStore.filteredData.map((item, i) => {
            return <Item key={i} title={item.title} placeOfPublication={item.placeOfPublication} />
          })
        }
      </div>
    )
  }
}