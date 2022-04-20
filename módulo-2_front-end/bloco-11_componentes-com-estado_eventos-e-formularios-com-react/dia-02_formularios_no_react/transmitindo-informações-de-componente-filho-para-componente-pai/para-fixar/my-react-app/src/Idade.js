import React, { Component } from 'react';
import './Form.css';

class Idade extends Component {
  render() {

    const { handleChange, value } = this.props;

      return (
        <label>
          idade:
          <input
            type="number"
            name="idade"
            value={value}
            onChange={handleChange}
          />
        </label>
      )
  }
}

export default Idade;
