import React from 'react';

const UserList = (props) => {
    
    const {users} = props;

    return (
        <div >
            <h1>User list</h1>
            <table style={{marginLeft: '40%'}}>
                <tr><td >First Name</td><td>Last Name</td><td>Email</td></tr>
                {users.map(user => {
                    return (<tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>)
                })}
            </table>
        </div>

    );
};

export default UserList;
