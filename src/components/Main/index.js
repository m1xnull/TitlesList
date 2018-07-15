import React, { Component } from 'react';
import Item from '../Item';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Item key={'1'} title={'TEST1'} placeOfPublication={'TEST1'}/>
        <Item key={'2'} title={'TEST2'} placeOfPublication={'TEST2'}/>
        <Item key={'3'} title={'TEST3'} placeOfPublication={'TEST3'}/>
        <Item key={'4'} title={'TEST4'} placeOfPublication={'TEST4'}/>
      </div>
      )
    }
}