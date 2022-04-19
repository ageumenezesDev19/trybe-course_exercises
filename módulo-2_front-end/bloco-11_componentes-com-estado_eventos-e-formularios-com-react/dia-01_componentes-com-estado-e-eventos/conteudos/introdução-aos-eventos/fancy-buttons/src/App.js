import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const { texto } = this.props;

    function handleClick() {
      console.log(`${texto}`);
    }

    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;
