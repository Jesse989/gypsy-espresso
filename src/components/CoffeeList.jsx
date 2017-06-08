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
        backgroundColor: "rgba(255, 219, 188, .0)",
      },
      centered: {
        textAlign: "center",
      }
    };

    const houseBlendsCoffeeList = this.props.coffees.houseBlends.map((coffee, i) => (
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

    const singleOriginsCoffeeList = this.props.coffees.singleOrigins.map((coffee, i) => (
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
          <div className="column is-10 is-offset-1">
            <h2 style={styles.cursiveFont} className="title is-2">Our House Blends:</h2>
            <h2 style={styles.cursiveFont} className="subtitle is-4">Blended to bring out each coffees most brilliant characteristics.</h2>
            <div style={styles.centered} className="columns">
              {houseBlendsCoffeeList}
            </div>
            <hr />
            <h2 style={styles.cursiveFont} className="title is-2">Single Origin:</h2>
            <h2 style={styles.cursiveFont} className="subtitle is-4">Hand picked for their incredible depth and full flavors.</h2>
            <div style={styles.centered} className="columns">
              {singleOriginsCoffeeList}
            </div>
            <hr />
            <h2 style={styles.cursiveFont} className="title is-2">Roasted fresh daily:</h2>
            <h2 style={styles.cursiveFont} className="subtitle is-4">We ship all our coffee within 24 hours of roasting!</h2>
            <hr />
          </div>
        </div>
      </div>
    )
  }
}

CoffeeList.propTypes = {
  coffees: PropTypes.object.isRequired,
};

export default CoffeeList;
