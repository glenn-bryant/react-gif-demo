import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchBar extends Component {
  handleChange = (event) => {
    const { changeGifList } = this.props;
    changeGifList(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}
