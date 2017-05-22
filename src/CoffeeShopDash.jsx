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
      description: 'Extra dark roast with lots of crema',
      origin: 'Jamaica',
      sku: 'sku_AhUHs2nQNu82ud'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Don Dankmasta Dirty',
      description: 'Clean light roast with lots of berry',
      origin: 'Jamaica',
      sku: 'sku_AhUG4wuPa5IZwN'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Humble Honduran',
      description: 'Extra dark roast with lots of hard working flavors',
      origin: 'Honduras',
      sku: 'sku_AhUEPjWcwToEe3'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
      name: 'Humble Honduran',
      description: 'Extra light roast with lots of stonefruit and old leather',
      origin: 'Honduras',
      sku: 'sku_AhOlhVdWUYHToL'
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
