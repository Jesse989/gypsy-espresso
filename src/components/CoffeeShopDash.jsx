import React, { Component } from 'react';
import Title from './Title';
import Sub from './Sub';
import ProductSpotlight from './ProductSpotlight';
import SearchSort from './SearchSort';
import coffees from '../js/coffeeApi';
import SubscriptionInfo from './SubscriptionInfo'

class CoffeeShopDash extends Component {
  render() {

    return (
      <div>
        <ProductSpotlight />
        <SubscriptionInfo />
        <SearchSort
          coffees={coffees}/>
        <Title />
        <Sub />
      </div>

    );
  }
}

export default CoffeeShopDash;
