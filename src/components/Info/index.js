import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("titlesStore")
@observer
export default class Info extends Component {
  static propTypes = {
    titlesStore: PropTypes.shape({
      searchStatus: PropTypes.string.isRequired
    }).isRequired
  };

  renderStatus() {
    const {
      titlesStore: { searchStatus }
    } = this.props;
    switch (searchStatus) {
      case "loading":
        return <h3>{"Поиск статей"}</h3>;
      case "empty":
        return <h3>{"Ничего не найдено"}</h3>;
      case "error":
        return <h3>{"Ошибка"}</h3>;
      default:
        return false;
    }
  }

  render() {
    return <div>{this.renderStatus()}</div>;
  }
}
