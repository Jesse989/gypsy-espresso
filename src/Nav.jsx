import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    const styles = {
      cursiveFont: {
        fontFamily: 'Great Vibes',
        color: 'dark grey',
      },
    };

    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <p style={styles.cursiveFont} className="title">Gypsy Chick Espresso</p>
          </a>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
    </nav>
    )
  }
}
