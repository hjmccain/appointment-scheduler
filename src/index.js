import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
// import About from './components/About';
import './index.css';

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
