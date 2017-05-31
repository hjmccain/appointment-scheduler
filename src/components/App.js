import React, { Component } from 'react';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome!</h2>
        </div>
        <p className="App-intro">
          Hannah's Create-React-App & Node.js starter files.
        </p>
        <Login />
      </div>
    );
  }
}

export default App;
