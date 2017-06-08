import React, { Component } from 'react';
import backgroundImage from '../media/mom_next_to_trailer.jpg';

export default class AboutStory extends Component {
  render () {
    const styles = {
      banner: {
        backgroundImage: "url("+backgroundImage+")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 25%",
        height: "350px",
      },
      cursiveFont: {
        fontFamily: 'Great Vibes',
        color: '#562C22',
      },
    }
    return (
      <div>
        <div style={styles.banner}>
        </div>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 style={styles.cursiveFont} className="title is-2">It all began with coffee time</h1>
              <p>The journey began in January, 2017. Roblynn Neumann was vacationing
                in Mexico, in a small town called Ensenada. <br /><br />
                While huddling in a small Italian style espresso shop, she discovered
                a book that talked about starting a mobile coffee shop. <br /><br />
                It was the answer she had been looking for, as she had recently
                been unable to continue her sports massage practice after an accident. <br /><br />
                In January 2017, Gypsy Chick Espresso was born, and is the result of
                a love of adventure combined with a love for coffee. <br /><br />
                So embark on an adventure with us, drink coffee, and live a wonderful, wild,
                and an amazing life. <br /><br />
                As they say in Costa Rica, "Pura Vida!!"</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
