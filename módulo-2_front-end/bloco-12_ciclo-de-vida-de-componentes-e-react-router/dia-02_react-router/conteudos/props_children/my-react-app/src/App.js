import React from 'react';
import './App.css';

const { Component } = React;

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

export default App;
