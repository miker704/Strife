//REDACTED FILE NOT IN USE SINCE APPS PRE ALPHA BUILD

// // this is the beginning signin page which as been renamed redacted as it was merged with session form 

// import React from "react";
// import { Link } from "react-router-dom";



// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // username: '',
//             email: '',
//             password: ''
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.handleInput = this.handleInput.bind(this);
//         this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
//         this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);
//     }    
    
    
//     componentWillUnmount(){
//         this.props.removeSessionErrors();
//     }

//     loginAsDemoUser1() {
//         let demoUser = {
//             username: 'DemoUser1',
//             email: 'DemoUser1@strife.com',
//             birthday: '02-25-1996',
//             password: 'qwerty1234',
//         }    
//         // this.props.signInUser(demoUser)
//         this.setState({email:demoUser.email})
//         this.setState({password: demoUser.password})
//     }    

//     loginAsDemoUser2() {
//         let demoUser = {
//             username: 'DemoUser2',
//             email: 'DemoUser2@strife.com',
//             password: 'QWERTY1234',
//             birthday: '02-25-1997',
//         }    
//         this.setState({email:demoUser.email})
//         this.setState({password: demoUser.password})
//         // this.props.signInUser(this.state)
//     }    

//     handleInput(type) {
//         return (e) => {
//             this.setState({ [type]: e.currentTarget.value })
//         }    
//     }    
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.signInUser(this.state).then(() => this.props.history.push('/'));
//     }    


//     render() {


//         let footerMessage = <span>Need an account ? </span>
//         let signupLink = <Link to="/signup">Register</Link>
//         const headerMessage = "Welcome back!"
//         const subHeaderMessage = "We're so excited to see you again!"

//         const email = this.props.errors.includes("Login or password is invalid") ? <h5 className="login-error">
//         EMAIL - Login or password is invalid </h5> : <h5 className="login-normal">EMAIL</h5>


//         const password=this.props.errors.includes("Login or password is invalid") ? <h5 className="login-error">
//         PASSWORD - Login or password is invalid </h5> : <h5 className="login-normal">PASSWORD</h5>
        
//         //demo user button remains const as there credentials wont change
//         const signInAsDemoUser1 = <button type="submit" onClick={()=>this.loginAsDemoUser1()}>Demo 1 Login</button>
//         const signInAsDemoUser2 = <button type="submit" onClick={()=>this.loginAsDemoUser2()}>Demo 2 Login</button>


//         return (
//             <div className="session-signin-form">
//                 <div id = "login-form">

//                     <h3>{headerMessage}</h3>
//                     <p>{subHeaderMessage}</p>

//                 <form autoComplete="off" onSubmit={this.handleSubmit}>
//                     <label>Log in !</label> <br />
//                     {/* <label>username:
//                                 <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> <br />
//                                </label>  */}

//                         {email}
//                         <input type="text" value={this.state.email} onChange={this.handleInput('email')} /> <br />
                    
//                         {password}
//                         <input type="password" value={this.state.password} onChange={this.handleInput('password')} /> 

//                         <button type="submit" >Login!</button>
//                          <br />
//                          {signInAsDemoUser1} 
//                          {signInAsDemoUser2}
//                          <br /><br />
//                          {footerMessage} {signupLink}

                  
//                 </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default SignIn;