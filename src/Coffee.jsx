import React, { Component } from 'react';
import Buy from './Buy';
import PropTypes from 'prop-types';

class Coffee extends Component {

  render() {
    const styles = {
      coffeePic: {
        backgroundColor: "white",
        margin: "5px",
        textAlign: "center",
      },
      priceText: {
        fontSize: "19vmin",
      }

    }

    return (
      <div style={styles.coffeePic} className="column is-one-quarter">
        <img style={styles.noMargin} src={this.props.img} alt="coffee" />
        <br />
        <p>12 oz - Whole Bean</p>
        <p><strong>{this.props.name}</strong></p>
        <p>{this.props.description}</p>
        <br />
        <p className={styles.priceText}>${this.props.price}</p>
        <br />
        <Buy
          productSku={this.props.sku}
          productName={this.props.name}
        />
      </div>
    )
  };
}

Coffee.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Coffee;
