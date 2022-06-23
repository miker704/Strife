//this file will combine both the sign/in/up forms to be rendered based on 
//certain conditions


import React from "react";
import { Link } from "react-router-dom";


    class SessionForm extends React.Component {

            constructor(props){
                super(props);
                this.state = this.props.formType === 'Sign In' ? {email:"", password:""}: {email:"",username:"",birthday:"",password:""};
                this.handleUserInput = this.handleUserInput.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handleError = this.handleError.bind(this);
                this.handleDemoUser1=this.handleDemoUser1.bind(this);
                this.handleDemoUser2=this.handleDemoUser2.bind(this);

            }

            handleSubmit(){

            }

            handleUserInput(){

            }


            handleError(){

            }

            handleDemoUser1(){

            }

            handleDemoUser2(){
                
            }


            render(){
                return (
                    <div>

                    </div>
                )   
            }

    }


export default SessionForm;