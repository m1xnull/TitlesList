import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import Info from "../Info";

import { Wrapper, InputSearch, Button } from "./styles";

@inject("titlesStore")
@observer
export default class Search extends Component {
  static propTypes = {
    titlesStore: PropTypes.shape({}).isRequired
  };

  onChange = event => {
    const { titlesStore } = this.props;
    titlesStore.setValue(event.target.value);
  };

  onSubmit = event => {
    const { titlesStore } = this.props;
    event.preventDefault();
    titlesStore.fetchArticles();
  };

  render() {
    const {
      titlesStore: { searchValue }
    } = this.props;

    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <InputSearch
            value={searchValue}
            type="search"
            placeholder="Search"
            onChange={this.onChange}
          />
          <Button disabled={!searchValue}>{"GO"}</Button>
        </form>
        <Info />
      </Wrapper>
    );
  }
}
