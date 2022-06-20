import React from "react";




class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
        this.props.signInUser(this.state).then(() => this.props.history.push('/chirps'));
    }

    render() {
        return (
            <div className="session-signin-form">
                        <form >
                                <label>Log in !</label> <br />
                                <label>username:
                                <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> <br />
                               </label> 
                               <label>password:
                                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/> <br />
                                <button onClick={this.handleSubmit}>Login!</button>
                                </label>
                        </form>
            </div>
        )
    }
}

export default SignIn;