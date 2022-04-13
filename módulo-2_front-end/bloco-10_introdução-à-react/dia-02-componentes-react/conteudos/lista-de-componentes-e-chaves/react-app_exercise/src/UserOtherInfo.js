import React from "react";
import './UserOtherInfo.css';

class UserOtherInfo extends React.Component {
    render() {
        const { email, id, key } = this.props

        return ( <span className="other-info" key={ key }>{email} {id}</span> )
    }
}

export default UserOtherInfo;
