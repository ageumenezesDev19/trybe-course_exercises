import React from 'react';
import './App.css';

class Greeting extends React.Component {
    render() {
      return <h1 className="Greeting">Hello, {this.props.argument}!</h1>;
    }
  }
  
export default Greeting;
