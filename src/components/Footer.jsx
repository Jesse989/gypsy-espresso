import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    const styles = {
      navColor: {
        backgroundColor: "#2d2a26",
      },
      whiteText: {
        color: 'white',
        textAlign: 'center',
      },
    }
    return (
      <div>
      <hr />
      <div className="container">
        <div className="columns">
          <div style={styles.whiteText} className="column">
          	<p><strong>About</strong></p>
            <Link
              to={'/about/story'}><p>Our Story</p></Link>
            <Link
              to={'/about/coffee'}><p>Our Coffee</p></Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="has-text-centered">
        <p>&copy; 2019 Gypsy Chick Espresso Inc., All Rights Reserved</p>
      </div>
      <br />
      </div>
    )
  };
}

export default Footer;
