//this file will combine both the sign/in/up forms to be rendered based on 
//certain conditions


import React from "react";
import { Link } from "react-router-dom";


    class SessionForm extends React.Component {

            constructor(props){
                super(props);
                this.state = this.props.formType === 'Sign In' ? {email:"", password:""}: {email:"",username:"",password:""};
                this.handleUserInput = this.handleUserInput.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }

            render(){
                
            }

    }


export default SessionForm;