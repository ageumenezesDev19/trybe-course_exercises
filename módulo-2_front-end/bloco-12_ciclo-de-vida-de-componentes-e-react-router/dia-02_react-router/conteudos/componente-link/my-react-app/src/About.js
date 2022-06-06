import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <h3>Se meu navio de React é o de teseu e eu refatorei todos os seus componentes, ele ainda é o meu navio?</h3>
        <Link to="/" className="About-link">Voltar</Link>
      </div>
    )
  }
}

export default About;
