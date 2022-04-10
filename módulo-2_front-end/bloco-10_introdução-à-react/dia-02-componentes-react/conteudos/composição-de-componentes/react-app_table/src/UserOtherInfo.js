import React from "react";

class UserOtherInfo extends React.Component {
    render() {
        const { email, id } = this.props

        return ( <span>{email} {id}</span> )
    }
}

export default UserOtherInfo;
