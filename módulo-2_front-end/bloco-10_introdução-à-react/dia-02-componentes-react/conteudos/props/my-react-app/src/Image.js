import React from 'react';
import './App.css';

class Image extends React.Component {
  render() {
    return (
        <div className="ImageDiv">
            <img src={this.props.source} alt={this.props.alternativeText} />
        </div>
    )
  }
}

export default Image;