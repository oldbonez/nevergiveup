import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
   return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          bye there
        </p>
      </div>
    );
  }
}

export default App;

//---factory
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';
//
//it('renders without crashing', () => {
//  const div = document.createElement('div');
//  ReactDOM.render(<App />, div);
//});
//
// export default App;

