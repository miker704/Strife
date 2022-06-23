//this file will combine both the sign/in/up forms to be rendered based on 
//certain conditions


import React from "react";
import { Link } from "react-router-dom";


    class SessionForm extends React.Component {

            constructor(props){
                super(props);
                this.state = this.props.formType === 'Sign In' ? {email:"", password:"", emailError:"",passwordError:""}: {email:"",username:"",birthday:"",password:""};
                this.handleInput = this.handleInput.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.renderErrors = this.renderErrors.bind(this);
                this.loginAsDemoUser1=this.loginAsDemoUser1.bind(this);
                this.loginAsDemoUser2=this.loginAsDemoUser2.bind(this);

            }

            handleSubmit(e){
                    e.preventDefault();
                    this.props.removeErrors();
                    let submissionState = {};
                    if(this.props.formType==='Sign Up'){
                        submissionState = {
                            email: this.state.email,
                            username: this.state.username,
                            password: this.state.password,
                            birthday: this.state.birthday
                        }
                    }
                    else{
                        submissionState = {
                            email: this.state.email,
                            password: this.state.password
                        }
                    }

                    this.props.processForm(submissionState);
            }

            handleInput(field){
                        return (e) => {
                            this.setState({[field]: e.currentTarget.value})
                        }
            }


            renderErrors(){

                    return (
                        <ul>
                            {this.props.errors.map((error,index) =>(
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    )
            }

            loginAsDemoUser1(){
                    let demoUser = {
                        email: 'DemoUser1@strife.com',
                        password: 'qwerty1234'
                    }
                    this.props.processForm(demoUser);
            }

            loginAsDemoUser2(){
                let demoUser = {
                    email: 'DemoUser2@strife.com',
                    password: 'QWERTY1234'
                }
                this.props.processForm(demoUser);
            }


            render(){

                //assign variables that will display content bassed if the form is sigin vs sign out
                let email;
                let password;
                let userName;
                let birthday;


                return (
                    <div>

                    </div>
                )   
            }

    }


export default SessionForm;