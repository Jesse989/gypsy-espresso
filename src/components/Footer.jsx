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
            <Link
              to={'/about/events'}><p>Events</p></Link>
            <Link
              to={'/about/faq'}><p>FAQ</p></Link>
          </div>
          <div style={styles.whiteText} className="column">
          	<p><strong>Shop</strong></p>
            <Link
              to={'/shop/coffee'}><p>Coffee</p></Link>
            <Link
              to={'/shop/brewing'}><p>Brewing</p></Link>
            <Link
              to={'/shop/gifts'}><p>Gifts</p></Link>
            <Link
              to={'/shop/returns'}><p>Return Policy</p></Link>
          </div>
          <div style={styles.whiteText} className="column">
          	<p><strong>Brewing Guides</strong></p>
            <Link
              to={'/guides/aeropress'}><p>Aeropress</p></Link>
            <Link
              to={'/guides/chemex'}><p>Chemex</p></Link>
            <Link
              to={'/guides/coldbrew'}><p>Cold Brew</p></Link>
            <Link
              to={'/guides/pourover'}><p>Pour Over</p></Link>
            <Link
              to={'/guides/frenchpress'}><p>French Press</p></Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="has-text-centered">
        <p>&copy; 2017 Gypsy Chick Espresso Inc., All Rights Reserved</p>
      </div>
      <br />
      </div>
    )
  };
}

export default Footer;
