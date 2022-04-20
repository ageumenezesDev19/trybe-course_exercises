import React, { Component } from 'react';
import Textarea from './Textarea';
import Idade from './Idade';
import Checkbox from './Checkbox';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: false,
    };
  }

  handleChange({ target }) {
    const { name  } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <Textarea value={this.state.estadoFavorito} handleChange={this.handleChange} />
            <Idade value={this.state.idade} handleChange={this.handleChange} />
            <Checkbox checked={this.state.vaiComparecer} handleChange={this.handleChange} />
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Form;
