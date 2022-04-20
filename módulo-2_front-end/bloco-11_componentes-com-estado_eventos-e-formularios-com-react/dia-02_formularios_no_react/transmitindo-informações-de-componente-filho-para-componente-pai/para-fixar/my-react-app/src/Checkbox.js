import React, { Component } from 'react';
import './Form.css';

class Checkbox extends Component {
  render() {

    const { handleChange, checked } = this.props;

      return (
        <label>
          Vai comparecer:
          <input
            type="checkbox"
            name="vaiComparecer"
            checked={checked}
            onChange={handleChange}
          />
        </label>
      )
  }
}

export default Checkbox;
