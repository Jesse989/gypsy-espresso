import React, { Component } from 'react';
import aboutCoffeeBanner from '../media/about-coffee-banner.png';

export default class AboutCoffee extends Component {
  render () {
    const backgroundImage = '';
    const styles = {
      banner: {
        backgroundImage: "url("+aboutCoffeeBanner+")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "450px",
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
              <h1 style={styles.cursiveFont} className="title is-2">How we create the perfect bag of coffee:</h1>
              <h2 className="subtitle is-4">Step 1: Find the perfect coffee beans!</h2>
              <p> At Gypsy Chick Espresso, we specialize in finding responsibly sourced,
                completely organic coffee beans. This entails traveling the globe in search of
                the best farms, meeting with some of the most experienced coffee bean farmers,
                and sampling some of the best coffees in the world. <br />
              </p>
              <br />
              <h2 className="subtitle is-4">Step 2: Discover the perfect roast for the perfect coffee beans!</h2>
              <p>The next step is to discover the perfect roast
              that will bring out and magnify the most desirable characteristics. <br />
              This is done by roasting the beans as many different ways as possible, carefully taking note of
              the results, in order to find the best roasting profile. Each small batch is tasted carefully and the
              and then the roast is carefully adjusted to enhance the flavors.
              </p>
              <br />
              <h2 className="subtitle is-4">Step 3: Deliver the perfect bag of coffee to you!</h2>
              <p>The final step is to deliver the perfectly roasted coffee beans to the customer,
                shipping the freshly roasted coffee within twenty-four hours of roasting. This is done
                to ensure the coffee arrives in perfect time to be enjoyed at its peak. <br />
                Fresh roasted coffee needs time to release gasses from the roasting process,
                and this period is taken into account when each bag of coffee is ordered.
              </p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
