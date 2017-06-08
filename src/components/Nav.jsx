import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    const styles = {
      cursiveFont: {
        fontFamily: 'Great Vibes',
        color: '#562C22',
      },
    };

    return (
      <nav className="nav">
        <div className="nav-left">
          <Link
            className="nav-item"
            to={'/'}>
            <p style={styles.cursiveFont} className="title">Gypsy Chick Espresso</p>
          </Link>
        </div>
    </nav>
    )
  }
}
