import React, { Component } from 'react';
import './Form.css';

class Textarea extends Component {
  render() {

    const { handleChange, value } = this.props;

      return (
        <label className='textarea'>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
          <textarea name="estadoFavorito" value={value} onChange={handleChange} />
        </label>
      )
  }
}

export default Textarea;
