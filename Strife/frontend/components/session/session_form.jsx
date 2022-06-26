//this file will combine both the sign/in/up forms to be rendered based on 
//certain conditions


import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.formType === 'Sign In' ? { email: "", password: "", emailError: "", passwordError: "" } : { email: "", username: "", birthday: "", password: "" };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.userNameErrors=this.userNameErrors.bind(this);
        this.emailErrors = this.emailErrors.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);
        this.birthdayErrors = this.birthdayErrors.bind(this);
        this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
        this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.removeErrors();
        let submissionState = {};
        if (this.props.formType === 'Sign Up') {
            submissionState = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                birthday: this.state.birthday
                // birthday: new Date(this.state.birthday)

            }
        }
        else {
            submissionState = {
                email: this.state.email,
                password: this.state.password
            }
        }

        this.props.processForm(submissionState);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    renderErrors() {

        return (
            <ul>
                {this.props.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        )
    }

    componentWillUnmount(){
        this.props.removeSessionErrors();
    }

    loginAsDemoUser1() {
        let demoUser = {
            email: 'DemoUser1@strife.com',
            password: 'qwerty1234'
        }
        this.props.processForm(demoUser);
    }

    loginAsDemoUser2() {
        let demoUser = {
            email: 'DemoUser2@strife.com',
            password: 'QWERTY1234'
        }
        this.props.processForm(demoUser);
    }


    userNameErrors(){

        const USERNAME_ERRORS = ["USERNAME - Must be between 2 and 32 in length","Username can't be blank"]
            if(this.props.formType==="Sign Up"){
                if(this.props.errors.includes(USERNAME_ERRORS[0])){
                    return USERNAME_ERRORS[0];
                }
                else if(this.props.errors.includes(USERNAME_ERRORS[1])){
                    return USERNAME_ERRORS[1];
                }
            }
            return "";
    }

    emailErrors(){
        const EMAIL_ERRORS =["EMAIL - Not well formed email address", "EMAIL - Must be 320 or fewer in Length", "Email can't be blank","Email has already been taken"];
        // if(this.props.formType === "Sign In"){
        //     if()
        // }
        if (this.props.formType === "Sign Up"){
                for(let i= 0; i<=EMAIL_ERRORS.length;i++){
                    if(this.props.errors.includes(EMAIL_ERRORS[i])){
                        return EMAIL_ERRORS[i];
                    }
                }
        }
        return "";
    }

    passwordErrors(){
        const PASSWORD_ERRORS =["PASSWORD - Must be 72 or fewer in length", "Password is too short (minimum is 6 characters)", "Password can't be blank"];
        // if(this.props.formType === "Sign In"){
        //     if()
        // }
        if (this.props.formType === "Sign Up"){
                for(let i= 0; i<=PASSWORD_ERRORS.length;i++){
                    if(this.props.errors.includes(PASSWORD_ERRORS[i])){
                        return PASSWORD_ERRORS[i];
                    }
                }
        }
        return "";
    }

    birthdayErrors(){
        const BIRTHDAY_ERRORS =["Birthday can't be blank"]
        // if(this.props.formType === "Sign In"){
        //     if()
        // }
        if (this.props.formType === "Sign Up"){
             
                    if(this.props.errors.includes(BIRTHDAY_ERRORS[0])){
                        return BIRTHDAY_ERRORS[0];
                    }
                
        }
        return "";
    }


    render() {

        //assign variables that will display content bassed if the form is sigin vs sign out
        let email;
        let password;
        
        let birthday;
        const userName = this.props.formType === "Sign In" ? (""):(
            <div className="field">
                <label id="username-field">USERNAME{this.userNameErrors()}</label>
                <input type="text"value={this.state.username} onChange={this.handleInput('username')}/>
            </div>
        );

        
        
        
        
        
        
        
        
        
        
        
        
        
        return (
            <div className="session-signup-form">

            <h2>Create an Account!</h2>
            <form onSubmit={this.handleSubmit}>
                  
                    {userName}
                    {/* <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> */}
                    
                
                    {email}
                    <input type="email"value={this.state.email} onChange={this.handleInput('email')} />
                  

                  
                    {birthday}
                    <input type="date"value={this.state.birthday} onChange={this.handleInput('birthday')} />
                    {password}
                    

               
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    <button type="submit">Create Account!</button>
            </form>
</div>
        )
    }

}


export default SessionForm;