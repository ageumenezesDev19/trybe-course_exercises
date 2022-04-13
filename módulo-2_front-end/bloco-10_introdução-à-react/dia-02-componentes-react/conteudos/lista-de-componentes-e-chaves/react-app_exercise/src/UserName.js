import React from "react";
import './UserName.css';

class UserName extends React.Component {
    render() {

        const { name, key } = this.props;

        return ( <span className="name" key={ key }>{name}</span> )
    }
}

export default UserName;
