import React, { Component } from 'react';
import Buy from './Buy';
import Subscribe from './Subscribe';
import PropTypes from 'prop-types';

class Coffee extends Component {
  state = {
    hover: false,
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render() {
    const styles = {
      coffeePic: {
        backgroundColor: "white",
        margin: "5px",
        textAlign: "center",
        outline: this.state.hover ? "grey solid 2px" : "white solid 4px",

      },
    }

    return (
      <div
        style={styles.coffeePic}
        className="column is-one-quarter"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img style={styles.noMargin} src={this.props.img} alt="coffee" />
        <br />
        <p><i>12 oz - Whole Bean</i></p>
        <p><strong>{this.props.name}</strong></p>
        <p>{this.props.description}</p>
        <p>${this.props.price}</p>
        <br />
            <Subscribe
              productSku={this.props.sku}
              productName={this.props.name}
            />
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
