import React, { Component } from 'react';
import CoffeeList from './CoffeeList';

class SearchSort extends Component {
  render() {
    return (
      <CoffeeList
        coffees={this.props.coffees}
      />
    )
  };
}

export default SearchSort;
