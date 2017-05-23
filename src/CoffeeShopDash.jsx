import React, { Component } from 'react';
import Title from './Title';
import Sub from './Sub';
import ProductSpotlight from './ProductSpotlight';
import SearchSort from './SearchSort';
import Footer from './Footer';
import Nav from './Nav';


class CoffeeShopDash extends Component {
  render() {
    const coffees = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Don Dankmasta Dirty',
      description: 'Lots of crema',
      origin: 'Jamaica',
      sku: 'sku_AhUHs2nQNu82ud',
      price: 20.87
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Emerald Dream',
      description: 'Clean light roast',
      origin: 'Jamaica',
      sku: 'sku_AhUG4wuPa5IZwN',
      price: 20.87
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Humble Honduran',
      description: 'Extra dark roast',
      origin: 'Honduras',
      sku: 'sku_AhUEPjWcwToEe3',
      price: 20.87
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Humble Honduran',
      description: 'Extra stonefruit',
      origin: 'Honduras',
      sku: 'sku_AhOlhVdWUYHToL',
      price: 20.87
    },
  ]


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
