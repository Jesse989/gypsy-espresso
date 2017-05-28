import React, { Component } from 'react';
import backgroundImage from '../media/finalcomp.png';

class Title extends Component {

  render() {

    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-3">
                <img src={backgroundImage} alt="logo"/>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
    )
  };
}

export default Title;
