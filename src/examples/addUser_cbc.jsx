import React, {Component} from 'react';

class AddUserCBC extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',  //
            lastName: '',
            email: '',      // input
            country: '',    // dropdown
            state: ''       // dropdown
        }
    }

    handleInputChange = (e) => {
        // update component state in class components - setState API
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = () => {
        console.log(this.state, 'state');
        const user = this.state;
        this.props.addUserToList(user);     // call to parent props function
        this.resetForm();
    };


    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',      // input
            country: '',    // dropdown
            state: '' 
        })
    };

    render() {
        return (
            <div style={{margin:'0 auto'}}>
                <h1> Add New User</h1>
                <label>FirstName:</label>
                <input 
                    name="firstName" 
                    onChange={e => this.handleInputChange(e)} 
                    value={this.state.firstName} />
                <br/>
                <label>LastName:</label>
                <input 
                    name="lastName" 
                    onChange={e => this.handleInputChange(e)} 
                    value={this.state.lastName} />
                <br/>
                <label>Email:</label>
                <input 
                    name="email" 
                    onChange={e => this.handleInputChange(e)} 
                    value={this.state.email} />
                <br/>
                <div>
                <button onClick={this.addUser}>Add user</button>
                <button onClick={this.resetForm}> Reset form</button>
                </div>
            </div>
        )
    }
};

export default AddUserCBC;
    