import React from "react";
import './UserOtherInfo.css';

class UserOtherInfo extends React.Component {
    render() {
        const { email, id } = this.props

        return ( <li className="other-info" key={`${Math.floor(Math.random() * 1000)}`}>{email} {id}</li> )
    }
}

export default UserOtherInfo;
