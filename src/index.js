import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';


import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>, document.getElementById('root'));
registerServiceWorker();
