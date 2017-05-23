import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

class Buy extends Component {

  onToken = (token, args) => {
    const payload = Object.assign(token, args, { productSku: this.props.productSku})
    //TODO create a component that pops up to say the order
    //was succesful or not.
    fetch('/order', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload),
    }).then(token => {
      if (token.status === 200) {
        alert(`Thank you, your order for ${this.props.productName} is being processed`)
      } else {
        alert("There was an error, please try again")
      }
    })
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
          image="https://gypsychickespresso.files.wordpress.com/2017/04/finalcomp.png?w=640"
          token={this.onToken}
          stripeKey={process.env.PUBLISHABLE}
        >
          <button className="button is-inverted">Buy Now</button>
        </StripeCheckout>
      </div>
    )
  }
}

Buy.propTypes = {
  productName: PropTypes.string.isRequired,
  productSku: PropTypes.string.isRequired,
}

export default Buy;
