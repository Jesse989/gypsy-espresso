import React, { Component } from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types'

class CoffeeList extends Component {
  render() {
    const styles = {
      cursiveFont: {
        fontFamily: 'Great Vibes',
        color: '#562C22',
      },
      navColor: {
        backgroundColor: "rgba(255, 219, 188, .3)",
      },
      centered: {
        textAlign: "center",
      }
    };

    const coffeeList = this.props.coffees.map((coffee, i) => (
      <Coffee
        key={i}
        img={coffee.img}
        name={coffee.name}
        description={coffee.description}
        origin={coffee.origin}
        sku={coffee.sku}
        price={coffee.price}
        />
    ));

    return (
      <div style={styles.navColor} className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1 is-6-mobile is-offset-3-mobile">
            <h2 style={styles.cursiveFont} className="title is-2">Roasted fresh daily:</h2>
            <div style={styles.centered} className="columns">
              {coffeeList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CoffeeList.propTypes = {
  coffees: PropTypes.array,
};

export default CoffeeList;
