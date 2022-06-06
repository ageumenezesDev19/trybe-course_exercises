import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    const { info } = this.props.match.params;
    return (
      <div>
        <h2>{ info }</h2>
        <h3>{this.props.text}</h3>
        <Link to="/" className="About-link">Voltar</Link>
      </div>
    )
  }
}

// Se meu navio de React é o de teseu e eu refatorei todos os seus componentes, ele ainda é o meu navio?

export default About;
