import React, { Component } from 'react';
import Buy from './Buy';
import PropTypes from 'prop-types';

class Coffee extends Component {

  render() {
    const styles = {
      coffeePic: {
        borderRadius: '5%',
      },
    }

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image">
              <img style={styles.coffeePic} src={this.props.img} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <small>{this.props.origin}</small>
                <br />
                {this.props.description}
              </p>
            </div>
          </div>
          <Buy
            productName={this.props.name}
            productSku={this.props.sku} />
        </article>
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
