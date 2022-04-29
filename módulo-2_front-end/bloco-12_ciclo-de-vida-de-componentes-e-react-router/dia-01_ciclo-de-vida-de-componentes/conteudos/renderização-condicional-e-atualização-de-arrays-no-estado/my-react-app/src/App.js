import DadJoke from './components/DadJoke';
import React from 'react';
import './App.css';

const { Component } = React;

class App extends Component {
  render() {
    return (
      <div>
        <DadJoke />
      </div>
    );
  }
}

export default App;
