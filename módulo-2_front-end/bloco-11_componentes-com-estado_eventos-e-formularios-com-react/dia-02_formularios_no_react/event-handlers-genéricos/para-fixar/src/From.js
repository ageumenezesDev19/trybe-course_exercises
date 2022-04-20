import React, { Component } from 'react'
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
            <label className='textarea'>
              Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =
                <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
            </label>
            <label>
              idade:
              <input
                type="number"
                name="idade"
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Vai comparecer:
              <input
                type="checkbox"
                name="vaiComparecer"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Form;
