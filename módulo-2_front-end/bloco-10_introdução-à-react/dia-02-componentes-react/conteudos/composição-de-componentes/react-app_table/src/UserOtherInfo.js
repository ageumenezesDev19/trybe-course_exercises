import React from "react";
import './UserOtherInfo.css';

class UserOtherInfo extends React.Component {
    render() {
        const { email, id } = this.props

        return ( <span className="other-info">{email} {id}</span> )
    }
}

export default UserOtherInfo;
