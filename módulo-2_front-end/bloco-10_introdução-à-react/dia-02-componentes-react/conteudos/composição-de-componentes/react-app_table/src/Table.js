import React from "react";
import UserName from './UserName';
import UserOtherInfo from './UserOtherInfo';

class Table extends React.Component {
    render() {

        const joão = {
            id: 102,
            name: "João",
            email: "joao@gmail.scom",
            avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
          };

          const amelia = {
            id: 77,
            name: "Amélia",
            email: "amelia@gmail.com",
            avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
          };

        return (
            <div>
                <section>
                    <UserName name={joão.name}/>
                    <UserOtherInfo email={joão.email} id={joão.id}/>
                </section>
                <section>
                    <UserName name={amelia.name}/>
                    <UserOtherInfo email={amelia.email} id={amelia.id}/>
                </section>
            </div>
        )
    }
}

export default Table;
