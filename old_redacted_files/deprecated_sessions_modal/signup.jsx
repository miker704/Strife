//REDACTED FILE NOT IN USE SINCE APPS PRE ALPHA BUILD

// // this is the beginning signup page which as been renamed redacted as it was merged with session form 

// import React from "react";
// import SessionErrorHandler from "../../utils/error_handling_api_util";



// class SignUp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             email: '',
//             birthday: '',
//             password: ''
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.handleInput = this.handleInput.bind(this);
//     }


//     handleInput(type) {
//         return (e) => {
//             this.setState({ [type]: e.currentTarget.value })
//         }
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.signUpUser(this.state).then(() => this.props.history.push('/'));
//     }

//     componentWillUnmount(){
//         this.props.removeSessionErrors();
//     }

//     render() {

//         let email = this.props.errors.includes("Email can't be blank") ? <h5 className="login-error">
//             EMAIL - REQUIRED FIELD </h5> : <h5 className="login-normal">EMAIL</h5>


//         let password=this.props.errors.includes('Password is too short (minimum is 8 characters)') ? <h5 className="login-error">
//         PASSWORD - MUST BE AT LEAST 8 CHARACTERS LONG </h5> : <h5 className="login-normal">PASSWORD</h5>
//         let username=this.props.errors.includes("Username can't be blank") ? <h5 className="login-error">
//         USERNAME - REQUIRED FIELD </h5> : <h5 className="login-normal">USERNAME</h5>
//         let birthday=this.props.errors.includes("Birthday can't be blank") ? <h5 className="login-error">
//         BIRTHDAY - REQUIRED FIELD </h5> : <h5 className="login-normal">BIRTHDAY</h5>


//         if (this.props.errors.includes("Email has already been taken")){
//             email = <h5 className="login-error">AN ACCOUNT WITH THAT EMAIL ALREADY EXISTS</h5>
//         }


//         return (
//             <div className="session-signup-form">

//                         <h2>Create an Account!</h2>
//                         <form onSubmit={this.handleSubmit}>
//                                 {/* <label>username:</label> */}
//                                 {username}
//                                 <input type="text"value={this.state.username} onChange={this.handleInput('username')}/>
                                
//                                 {/* <br /> */}
//                                 {/* <label>Email:</label> */}
//                                 {email}
//                                 <input type="email"value={this.state.email} onChange={this.handleInput('email')} />
//                                 {/* <br /> */}

//                                 {/* <label>Birthday:</label> */}
//                                 {birthday}
//                                 <input type="date"value={this.state.birthday} onChange={this.handleInput('birthday')} />
//                                 {password}
//                                 {/* <br /> */}

//                                 {/* <label>password:</label> */}
//                                 <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
//                                 <button type="submit">Create Account!</button>
//                         </form>
//             </div>
//         )
//     }
// }

// export default SignUp;