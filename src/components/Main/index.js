import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import Item from "../Item";

@inject("titlesStore")
@observer
export default class Main extends Component {
  static propTypes = {
    titlesStore: PropTypes.shape({
      filteredData: PropTypes.array
    }).isRequired
  };

  render() {
    const {
      titlesStore: { filteredData }
    } = this.props;
    return (
      <div>{filteredData.map(item => <Item key={item.id} data={item} />)}</div>
    );
  }
}
