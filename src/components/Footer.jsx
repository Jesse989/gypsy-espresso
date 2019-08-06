import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    const styles = {
      navColor: {
        backgroundColor: '#2d2a26'
      },
      whiteText: {
        color: 'white',
        textAlign: 'center'
      }
    };
    return (
      <div>
        <hr />
        <div className="has-text-centered">
          <p>&copy; 2019 Gypsy Chick Espresso Inc., All Rights Reserved</p>
        </div>
        <br />
      </div>
    );
  }
}

export default Footer;
