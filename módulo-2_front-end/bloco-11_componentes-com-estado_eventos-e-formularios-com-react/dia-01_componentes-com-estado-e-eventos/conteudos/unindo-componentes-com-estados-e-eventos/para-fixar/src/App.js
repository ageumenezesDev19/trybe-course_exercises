import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numeroDeCliques: 0,
      color: '',
      border: '',
    }
  }

  handleClick = async (pontos) => {
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

      if (parseFloat((parseFloat(this.state.numeroDeCliques.replace(/[^0-9]/g,''))) + 1) % 2 === 0) {
        this.setState(() => ({
          color: 'rgb(10, 233, 10)',
          border: '3px'
        }))
      } else {
        this.setState(() => ({
          color: '',
          border: ''
        }))
      }
    }

    console.log(`Número de clicks: ${this.state.numeroDeCliques}`);
    if (this.state.color === 'rgb(10, 233, 10)') {
      console.log(`Número Par`);
    } else {
      console.log(`Número Impar`);
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(this.props.text)} Style={`background-color: ${this.state.color}; border-radius: ${this.state.border};`}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

App.propTypes = {
  text: PropTypes.string.isRequired,
}

export default App;
