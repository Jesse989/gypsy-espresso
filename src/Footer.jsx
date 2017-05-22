import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const styles = {
      navColor: {
        backgroundColor: "#2d2a26",
      },
      whiteText: {
        color: 'white'
      },
    }
    return (
      <div style={styles.navColor} className="section">
        <div className="columns">
          <div style={styles.whiteText} className="column is-half is-offset-one-quarter">
          	<p>&copy; 2017 Gypsy Chick Espresso Inc., All Rights Reserved</p>
          </div>
        </div>
      </div>
    )
  };
}

export default Footer;
