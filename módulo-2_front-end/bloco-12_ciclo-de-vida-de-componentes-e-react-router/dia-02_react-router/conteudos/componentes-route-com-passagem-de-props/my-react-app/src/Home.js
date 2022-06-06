import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
          <div>
            <Link to="/about" className="About-link">About</Link>
            <h1>Minha Homepage</h1>
          </div>
        )
    }
}

export default Home;
