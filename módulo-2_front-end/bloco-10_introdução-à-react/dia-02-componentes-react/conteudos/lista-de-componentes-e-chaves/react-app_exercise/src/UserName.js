import React from "react";
import './UserName.css';

class UserName extends React.Component {
    render() {

        const { name } = this.props;

        return ( <li className="name" key={`${Math.floor(Math.random() * 1000)}`}>{name}</li> )
    }
}

export default UserName;
