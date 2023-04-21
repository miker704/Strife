//The following the old version of the sessions form that  morph its form to login and signup based on the current route.

// //this file will combine both the sign/in/up forms to be rendered based on 
// //certain conditions


// import React from "react";
// import { Link } from "react-router-dom";


// class SessionForm extends React.Component {

//     constructor (props) {
//         super(props);
//         this.state = this.props.formType === 'Sign In' ? { email: "", password: "" } : { email: "", username: "", password: "", birthday: "", month: "", day: "", year: "" };
//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.errors = this.errors.bind(this);
//         this.userNameErrors = this.userNameErrors.bind(this);
//         this.emailErrors = this.emailErrors.bind(this);
//         this.passwordErrors = this.passwordErrors.bind(this);
//         this.birthdayErrors = this.birthdayErrors.bind(this);
//         this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
//         this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);


//     }


//     handleSubmit (e) {
//         e.preventDefault();
//         // this.props.removeErrors();
//         let submissionState = {};
//         if (this.props.formType === 'Sign Up') {
//             submissionState = {
//                 email: this.state.email,
//                 username: this.state.username,
//                 password: this.state.password,
//                 birthday: new Date(this.state.birthday)

//             }
//         }
//         else {
//             submissionState = {
//                 email: this.state.email,
//                 password: this.state.password
//             }
//         }

//         this.props.processForm(submissionState).then(() => {
//             // setTimeout(() => {
//             this.props.history.push("/$/loading/");
//             // }, 10)
//         });
//     }

//     handleInput (field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value }, () => { this.setState({ birthday: this.state.month + "/" + this.state.day + "/" + this.state.year }) })
//         }
//     }


//     errors () {

//         return (
//             <ul>
//                 {this.props.errors.map((error, index) => (
//                     <li key={index}>{error}</li>
//                 ))}
//             </ul>
//         )
//     }

//     componentWillUnmount () {
//         this.props.removeSessionErrors();

//     }

//     loginAsDemoUser1 () {
//         let demoUser = {
//             email: 'DemoUser1@strife.com',
//             password: 'qwerty1234'
//         }
//         this.setState({ email: demoUser.email })
//         this.setState({ password: demoUser.password })
//         this.props.processForm(demoUser).then(() => {
//             // setTimeout(() => {
//             this.props.history.push("/$/loading/");
//             // }, 10)
//         });
//         // this.props.processForm(this.state)

//     }

//     loginAsDemoUser2 () {
//         let demoUser = {
//             email: 'DemoUser2@strife.com',
//             password: 'QWERTY1234'
//         }
//         this.setState({ email: demoUser.email })
//         this.setState({ password: demoUser.password })
//     }


//     userNameErrors () {

//         let USERNAME_ERRORS = ['Username is too short (minimum is 2 characters)', 'Username is too long (maximum is 32 characters)', 'Username Must be between 2 and 32 in length', "Username can't be blank"]
//         if (this.props.formType === "Sign Up") {
//             if (this.props.errors.includes("Username can't be blank")) {
//                 return " - This field is required";
//             }
//             else if (this.props.errors.includes('Username is too short (minimum is 2 characters)')) {

//                 return ' - Must be between 2 and 32 in length';
//             }
//             else if (this.props.errors.includes('Username is too long (maximum is 32 characters)')) {
//                 return ' - Must be between 2 and 32 in length';
//             }

//         }
//         return "";
//     }

//     emailErrors () {
//         const EMAIL_ERRORS = ['Email Not well formed email address', "Must be 320 or fewer in Length", "Email can't be blank", "Email has already been taken", "Login or password is invalid"];

//         if (this.props.formType === "Sign In") {
//             if (this.props.errors.includes('Login or password is invalid')) {
//                 return " - Login or password is invalid";
//             }
//         }

//         if (this.props.formType === "Sign Up") {
//             if (this.props.errors.includes("Email can't be blank")) {
//                 return " - can't be blank";
//             }
//             else if (this.props.errors.includes("Email Not well formed email address")) {

//                 return " - Not well formed email address";
//             }
//             else if (this.props.errors.includes("Email Must be 320 or fewer in Length")) {
//                 return " - Must be 320 or fewer in Length";
//             }
//             else if (this.props.errors.includes("Email has already been taken")) {
//                 return " - Email is already registered ";
//             }

//         }

//         return "";
//     }

//     passwordErrors () {
//         const PASSWORD_ERRORS = ['Password is too long (maximum is 72 characters)', "Password is too short (minimum is 8 characters)", "Password can't be blank", 'Login or password is invalid'];
//         if (this.props.formType === "Sign In") {
//             if (this.props.errors.includes('Login or password is invalid')) {
//                 return " - Login or password is invalid";
//             }
//         }
//         if (this.props.formType === "Sign Up") {
//             if (this.props.errors.includes("Password can't be blank")) {
//                 return " - can't be blank";
//             }
//             else if (this.props.errors.includes("Password is too long (maximum is 72 characters)")) {

//                 return " - Must be 72 or fewer in length";
//             }
//             else if (this.props.errors.includes("Password is too short (minimum is 8 characters)")) {
//                 return " - Must be at least 8 characters long";
//             }

//         }
//         return "";
//     }

//     birthdayErrors () {
//         const BIRTHDAY_ERRORS = ["Birthday can't be blank"]

//         if (this.props.formType === "Sign Up") {

//             if (this.props.errors.includes("Birthday can't be blank")) {
//                 return " - can't be blank"
//             }

//         }
//         return "";
//     }


//     render () {

//         //assign variables to change classname tags depending if an error has occcured or not

//         let emailErrorTag = "";
//         let passwordErrorTag = "";
//         let birthdayErrorTag = "";
//         let usernameErrorTag = "";
//         if (this.props.formType === "Sign In" && this.props.errors.length > 0) {
//             emailErrorTag = this.props.errors.includes('Login or password is invalid') ? "login-error" : ""
//             passwordErrorTag = this.props.errors.includes('Login or password is invalid') ? "login-error" : ""
//         }
//         else if (this.props.formType === "Sign Up") {
//             emailErrorTag = this.props.errors.includes("Email Not well formed email address") ||
//                 this.props.errors.includes("Email Must be 320 or fewer in Length") ||
//                 this.props.errors.includes("Email can't be blank") ||
//                 this.props.errors.includes("Email has already been taken") ? "login-error" : "";

//             passwordErrorTag = this.props.errors.includes("Password is too short (minimum is 8 characters)") ||
//                 this.props.errors.includes("Password can't be blank") ||
//                 this.props.errors.includes("Password is too long (maximum is 72 characters)") ? "login-error" : "";


//             birthdayErrorTag = this.props.errors.includes("Birthday can't be blank") ? "login-error" : "";

//             usernameErrorTag = this.props.errors.includes('Username is too short (minimum is 2 characters)') ||
//                 this.props.errors.includes('Username is too long (maximum is 32 characters)') ||
//                 this.props.errors.includes("Username can't be blank") ? "login-error" : ""
//         }

//         //assign variables that will display content bassed if the form is sigin vs sign out
//         const email = this.props.formType === "Sign Up" ? (
//             <div className="field">
//                 <label id="email-label" className={emailErrorTag}>EMAIL{this.emailErrors()}</label>
//                 <input id="email" className={emailErrorTag} type="email" value={this.state.email} onChange={this.handleInput('email')} />
//             </div>
//         ) : (
//             <div className="field">
//                 <label id="email-label" className={emailErrorTag}>EMAIL OR PHONE NUMBER{this.emailErrors()}</label>
//                 <input id="email" className={emailErrorTag} type="email" value={this.state.email} onChange={this.handleInput('email')} />
//             </div>
//         )
//             ;
//         const password = (
//             <div className="field">
//                 <label id="password-label" className={passwordErrorTag}>PASSWORD{this.passwordErrors()}</label>
//                 <input id="password" className={passwordErrorTag} type="password" value={this.state.password} onChange={this.handleInput('password')} />
//             </div>
//         );


//         const userName = this.props.formType === "Sign In" ? ("") : (
//             <div className="field">
//                 <label id="username-label" className={usernameErrorTag}>USERNAME{this.userNameErrors()}</label>
//                 <input id="username" type="text" value={this.state.username} onChange={this.handleInput('username')} />
//             </div>
//         );

//         //messages depending on signup or sign in
//         const submitButtonMessage = this.props.formType === "Sign In" ? "Login" : "Continue"
//         const headerMessage = this.props.formType === "Sign In" ? (<h2 className="welcome-message">Welcome Back!</h2>) :
//             (<h2 className="signup-header">Create an account</h2>);
//         const subHeaderMessage = this.props.formType === "Sign In" ? ("We're so excited to see you again!") : ("");

//         const signInAsDemoUser1 = (
//             // <button type="submit" className="demo-login-button" onClick={() => this.loginAsDemoUser1()}>Demo Login</button>

//             <button type="submit" className="demo-login-button" onClick={() => this.loginAsDemoUser1()}>Demo Login</button>


//         );
//         // const signInAsDemoUser2 = (
//         // <button type="submit" className="demo-login-button" onClick={() => this.loginAsDemoUser2()}>Demo 2 Login</button>);



//         const demoLogins = this.props.formType === "Sign Up" ? ("") : (

//             <div className="demologins">


//                 <img className="wumpuslogin" />

//                 {signInAsDemoUser1}
//                 <div className="demologin-text">
//                     <h2>Login with a Demo account</h2>
//                     <p> and take a tour of $TR!F3 </p>
//                 </div>

//                 {/* {signInAsDemoUser1} */}



//             </div>


//         )




//         const forgotPassword = this.props.formType === "Sign In" ? (
//             <span className="forgotPassword"><Link to="/register">Forgot your password?</Link></span>
//         ) : ("");

//         const tos = this.props.formType === "Sign Up" ? (
//             <span className="tos">By registering, you agree to $TR!F3's{" "}
//                 <Link to="/register">Terms of Service</Link>
//                 {" "}and{" "}
//                 <Link to="/register">Privacy Policy</Link>
//                 .
//             </span>
//         ) : ("");

//         //drop box functions discord does not use the normal html date input tag 
//         const days = new Array();
//         for (let i = 1; i <= 31; i++) {
//             days.push(<option key={i} value={i}>{i}</option>);
//         }

//         //to future proof this  we use the current year right now
//         let timeNow = new Date();
//         let currentYear = timeNow.getFullYear();
//         const years = new Array();
//         for (let i = 0; i <= 150; i++) {
//             years.push(<option key={i} value={currentYear - i}>{currentYear - i}</option>);
//         }


//         const birthday = this.props.formType === "Sign In" ? ("") : (

//             <div className="field">

//                 <label id="birthday-label" className={birthdayErrorTag}>DATE OF BIRTH{this.birthdayErrors()}</label>
//                 <div className="dropbox-selector">

//                     <select id="month" defaultValue="00" onChange={this.handleInput('month')}>

//                         <option value="00" disabled>
//                             Select
//                         </option>
//                         <option value="01">January</option>
//                         <option value="02">February</option>
//                         <option value="03">March</option>
//                         <option value="04">April</option>
//                         <option value="05">May</option>
//                         <option value="06">June</option>
//                         <option value="07">July</option>
//                         <option value="08">August</option>
//                         <option value="09">September</option>
//                         <option value="10">October</option>
//                         <option value="11">November</option>
//                         <option value="12">December</option>


//                     </select>
//                     <select id="day" defaultValue="00" onChange={this.handleInput('day')}>
//                         <option value="00" disabled>Select</option>
//                         {days}
//                     </select>
//                     <select id="year" placeholder="Select" defaultValue="Select" onChange={this.handleInput('year')}>
//                         <option value="Select" disabled>Select</option>
//                         {years}
//                     </select>

//                 </div>

//             </div>

//         )


//         const formtype = this.props.formType === "Sign In" ? "box" : "box signup-box";



//         return (
//             <div className="session-form">
//                 <div id="box" className={formtype}>
//                     {/* <div className='login-box'> */}
//                     <div className="form-box">
//                         {headerMessage}

//                         <h3>{subHeaderMessage}</h3>

//                         <form onSubmit={this.handleSubmit}>
//                             {email}

//                             {/* <div className="field">
//                                 <label id="email-label" className={emailErrorTag}>
//                                     EMAIL{this.emailErrors()}
//                                 </label>
//                                 <input id="email" type="email" className={emailErrorTag} onChange={this.handleInput('email')} />

//                             </div> */}


//                             {userName}
//                             {password}

//                             {/* <div className="field">
//                                 <label id="password-label" className={passwordErrorTag}>
//                                     PASSWORD{this.passwordErrors()}
//                                 </label>
//                                 <input id="password" type="password" className={passwordErrorTag} onChange={this.handleInput('password')} /> */}

//                             {forgotPassword}
//                             {/* </div> */}



//                             {birthday}
//                             <div className="field">


//                                 {/* <button type="submit">{submitButtonMessage}</button> */}
//                                 <input type="submit" value={submitButtonMessage} />


//                                 {this.props.navLink}
//                                 {tos}
//                             </div>
//                         </form>
//                     </div>

//                     {demoLogins}
//                 </div>
//             </div>
//             // </div>
//         )
//     }

// }


// export default SessionForm;