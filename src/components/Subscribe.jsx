import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';
import smallFaceIcon from '../media/small_face.png'
import clientApi from '../js/clientApi'

class Subscribe extends Component {

  onToken = (token, args) => {
    const payload = Object.assign(token, args,
      {
        productSku: this.props.productSku,
        productName: this.props.productName,
      })
    clientApi(payload, "subscribe");
  }

  render() {
    return (
      <div>
        <StripeCheckout
          shippingAddress={true}
          billingAddress={true}
          amount={2087}
          zipCode={true}
          panelLabel="Send me coffee!"
          name='Gypsy Chick Espresso'
          image={smallFaceIcon}
          token={this.onToken}
          stripeKey='pk_live_6h9EkSZFS2AE6g33kzq3TCBc'
        >
          <button className="button is-danger is-inverted">Subscribe</button>
        </StripeCheckout>
      </div>
    )
  }
}

Subscribe.propTypes = {
  productName: PropTypes.string.isRequired,
  productSku: PropTypes.string.isRequired,
}

export default Subscribe;
