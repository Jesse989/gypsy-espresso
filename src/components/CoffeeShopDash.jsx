import React, { Component } from 'react';
import Title from './Title';
import Sub from './Sub';
import ProductSpotlight from './ProductSpotlight';
import SearchSort from './SearchSort';
import Footer from './Footer';
import Nav from './Nav';
import coffees from '../js/coffeeApi';


class CoffeeShopDash extends Component {
  render() {

    return (
      <div>
        <Nav />
        <ProductSpotlight />
        <SearchSort
          coffees={coffees}/>

        <Title />
        <Sub />
        <Footer />
      </div>

    );
  }
}

export default CoffeeShopDash;
