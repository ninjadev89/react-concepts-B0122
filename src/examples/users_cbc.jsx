import React, {Component} from 'react';
import AddUserCBC from './addUser_cbc';
import UserList from './userslist';

class UserCBC extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor (props) {
        super(props);
        this.state = {
            users: [],  
        }
    }

    addUserToList = (newUser) => { //recieve data from child component
        console.log(newUser, 'data from add user component');
        const updatedUsers = this.state.users; // existing list of users
        updatedUsers.push(newUser);    // add new user to the existing list
        this.setState({         // update the component state
            users: updatedUsers
        });
    };
    
    render() {
        const {users} = this.state;     //destructing the state
        console.log(users, 'users');
        return (
            <div>
                <div>This is users class based component </div>
                <AddUserCBC addUserToList={this.addUserToList} />
                <UserList users={users}/>
            </div>
        )
    }
};

export default UserCBC;


/*
userlist is empty - state
Add new user - Component - name, email, phone, country
Display users - Should added to user list   - Child component
*/
