import React, { Component } from 'react';
import coffeeBanner from './default-header.jpg';
import Buy from './Buy'

class ProductSpotlight extends Component {
  render() {
    const promotionalProduct = {
      name: "Don Dankmasta Dirty",
      sku: "sku_AhUHs2nQNu82ud",
    }

    const styles = {
      cursive: {
        fontFamily: 'Great Vibes',
        color: 'white'
      },
      lightBrown: {
        backgroundImage: "url("+coffeeBanner+")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      },
    }

    return (
      <div style={styles.lightBrown} className="section">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <br />
            <p style={styles.cursive} className="subtitle is-3">Rare single origin:</p>
            <p style={styles.cursive} className="title is-1">Honduran Don Dankmasta Dirty</p>
            <Buy
              productName={promotionalProduct.name}
              productSku={promotionalProduct.sku}/>
            <br />
          </div>
        </div>
      </div>
    )
  };
}

export default ProductSpotlight;
