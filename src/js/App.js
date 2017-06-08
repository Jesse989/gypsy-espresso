import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/bulma.css';
import '../media/GreatVibes-Regular.ttf';

import CoffeeShopDash from '../components/CoffeeShopDash';
import AboutStory from '../components/AboutStory';
import AboutCoffee from '../components/AboutCoffee';
import AboutEvents from '../components/AboutEvents';
import AboutFaq from '../components/AboutFaq';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Route exact path='/' component={CoffeeShopDash} />
          <Route path='/about/story' component={AboutStory} />
          <Route path='/about/coffee' component={AboutCoffee} />
          <Route path='/about/events' component={AboutEvents} />
          <Route path='/about/FAQ' component={AboutFaq} />
          <Footer />
        </div>
    );
  }
}

export default App;
