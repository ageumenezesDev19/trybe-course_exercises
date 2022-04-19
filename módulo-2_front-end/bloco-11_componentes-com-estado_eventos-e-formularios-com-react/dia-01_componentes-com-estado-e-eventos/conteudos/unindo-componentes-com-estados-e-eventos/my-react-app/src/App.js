import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (pontos) => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */

    if (this.state.numeroDeCliques === 0) {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: `${pontos} ${(estadoAnterior.numeroDeCliques) + 1}`
      }))
    } else {
      const clicks = parseFloat(this.state.numeroDeCliques.replace(/[^0-9]/g,''))
      const addDots = { dots: '' };

      for (let i = 0; i <= clicks; i += 1) {
        addDots.dots += pontos;
      }

      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: `${addDots.dots} ${(parseFloat(estadoAnterior.numeroDeCliques.replace(/[^0-9]/g,'')) + 1)}`
      }))
    }

    console.log(`Número de clicks: ${this.state.numeroDeCliques}`);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(this.props.text)}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

App.propTypes = {
  text: PropTypes.string.isRequired,
}

export default App;
