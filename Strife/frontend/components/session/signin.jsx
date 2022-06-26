import React from "react";
import { Link } from "react-router-dom";



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
        this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
        this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);
    }


    loginAsDemoUser1() {
        let demoUser = {
            email: 'DemoUser1@strife.com',
            password: 'qwerty1234'
        }
        this.props.signInUser(demoUser)
    }

    loginAsDemoUser2() {
        let demoUser = {
            email: 'DemoUser2@strife.com',
            password: 'QWERTY1234'
        }
        this.setState({email:demoUser.email,password: demoUser.password})
        this.props.signInUser(this.state)

    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.signInUser(this.state).then(() => this.props.history.push('/'));
    }

    componentWillUnmount(){
        this.props.removeSessionErrors();
    }


    render() {


        let footerMessage = <span>Need an account ? </span>
        let signupLink = <Link to="/signup">Register</Link>
        const headerMessage = "Welcome back!"
        const subHeaderMessage = "We're so excited to see you again!"

        let email = this.props.errors.includes("Invalid Login Credentials") ? <h5 className="login-error">
        EMAIL - INVALID CREDENTIALS </h5> : <h5 className="login-normal">EMAIL</h5>


        let password=this.props.errors.includes("Invalid Login Credentials") ? <h5 className="login-error">
        PASSWORD - INVALID CREDENTIALS </h5> : <h5 className="login-normal">PASSWORD</h5>
        
        //demo user button remains const as there credentials wont change
        const signInAsDemoUser1 = <button type="submit" onClick={()=>this.loginAsDemoUser1()}>Demo 1 Login</button>
        const signInAsDemoUser2 = <button type="submit" onClick={()=>this.loginAsDemoUser2()}>Demo 2 Login</button>


        return (
            <div className="session-signin-form">
                <div id = "login-form">

                    <h3>{headerMessage}</h3>
                    <p>{subHeaderMessage}</p>

                <form onClick={this.handleSubmit}>
                    <label>Log in !</label> <br />
                    {/* <label>username:
                                <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> <br />
                               </label>  */}

                        {email}
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} /> <br />
                    
                        {password}
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} /> <br />

                        <button type="submit" >Login!</button>
                         {signInAsDemoUser1}
                         {signInAsDemoUser2}
                         {footerMessage} {signupLink}

                  
                </form>
                </div>
            </div>
        )
    }
}

export default SignIn;