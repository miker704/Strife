import React from "react";




class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            birthday: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.signUpUser(this.state).then(() => this.props.history.push('/'));
    }

    // componentWillUnmount(){
        // this.props.
    // }

    render() {
        return (
            <div className="session-signup-form">
                        <form onSubmit={this.handleSubmit}>
                                <label>Create an Account!</label> <br />
                                <label>username:</label>
                                <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> <br />
                                <label>Email:</label>
                                <input type="text"value={this.state.email} onChange={this.handleInput('email')} /> <br />
                                <label>Birthday:</label>
                                <input type="date"value={this.state.birthday} onChange={this.handleInput('birthday')} /> <br />
                                <label>password:</label>
                                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/> <br />
                                <button>Create Account!</button>
                        </form>
            </div>
        )
    }
}

export default SignUp;