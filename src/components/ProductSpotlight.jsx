import React, { Component } from 'react';
import coffeeBanner from '../media/default-header.jpg';

class ProductSpotlight extends Component {
  render() {
    const styles = {
      img: {
        verticalAlign: "middle",
        padding: "0px, 0px, 0px, 0px"
      }
    }

    return (
      <div style={styles.img}>
        <div className="columns">
          <div className="column is-12">
            <img
              style={styles.img}
              src={coffeeBanner}
              alt="light brown coffee" />
          </div>
        </div>
      </div>
    )
  };
}

export default ProductSpotlight;
