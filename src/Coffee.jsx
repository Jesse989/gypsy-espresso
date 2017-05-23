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
    }

    return (
      <div style={styles.coffeePic} className="column is-one-quarter-desktop is-half-mobile">
        <img src={this.props.img} alt="coffee" />
        <h4 className="subtitle is-6">{this.props.name}</h4>
      </div>
    )
  };
}

Coffee.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired
}

export default Coffee;
