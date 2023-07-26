// //this file will combine both the sign/in/up forms to be rendered based on 
// //certain conditions

// import React from "react";
// import { Link } from "react-router-dom";

// class SessionForm extends React.Component {

//     constructor (props) {
//         super(props);
//         this.state = {
//             email: "",
//             username: "",
//             password: "",
//             birthday: "",
//             month: "",
//             day: "",
//             year: "",
//             cubes: false
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.passwordErrors = this.passwordErrors.bind(this);
//         this.emailErrors = this.emailErrors.bind(this);
//         this.birthdayErrors = this.birthdayErrors.bind(this);
//         this.userNameErrors = this.userNameErrors.bind(this);
//         this.errors = this.errors.bind(this);
//         this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
//         this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);
//         this.qrCubeSpinner = this.qrCubeSpinner.bind(this);
//         this.IntervalId = 0;

//     }
//     qrCubeSpinner () {

//         this.intervalId = setInterval(() => {
//             if (this.state.cubes === false) {
//                 this.setState({ cubes: !this.state.cubes });
//                 setTimeout(() => {
//                     this.setState({ cubes: !this.state.cubes });
//                 }, 10000);
//             }
//         }, 60000);
//     };


//     componentDidMount(){
//         if(this.props.formType === "Sign In"){
//             this.qrCubeSpinner();
//         }
//     }

//     componentWillUnmount () {
//         clearInterval(this.IntervalId);
//         this.props.removeSessionErrors();
//     }

//     handleSubmit (e) {
//         e.preventDefault();
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
//             this.props.history.push("/$/loading/");
//         });

//     }

//     handleInput (field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value }, () => { this.setState({ birthday: this.state.month + "/" + this.state.day + "/" + this.state.year }) });
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

//     loginAsDemoUser1 () {
//         let demoUser = {
//             email: 'DemoUser1@strife.com',
//             password: 'qwerty1234'
//         }
//         this.setState({ email: demoUser.email })
//         this.setState({ password: demoUser.password })
//         // this.props.processForm(demoUser).then(() => {
//         //     this.props.history.push("/$/loading/");
//         // });
//         // this.props.processForm(demoUser);

//     }

//     loginAsDemoUser2 () {
//         let demoUser2 = {
//             email: 'DemoUser2@strife.com',
//             password: 'QWERTY1234'
//         }
//         this.setState({ email: demoUser2.email })
//         this.setState({ password: demoUser2.password })
//         // this.props.processForm(demoUser2).then(() => {
//         //     this.props.history.push("/$/loading/");
//         // });
//         // this.props.processForm(demoUser2);
//     }





//     render () {

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


//         //assign variables to change classname tags depending if an error has occcured or not


//         const email = this.props.formType === "Sign Up" ? (
//             <div className="session-info-block-mb">
//                 <div className="field">
//                     <label id="email-label" className={emailErrorTag}>EMAIL<span className="session-error-msg">{this.emailErrors()}</span></label>
//                     <input id="email" className={emailErrorTag} type="email" value={this.state.email} onChange={this.handleInput('email')} spellCheck={false}/>
//                 </div>
//             </div>

//         ) : (
//             <div className="session-info-block-mb">
//                 <div className="field">
//                     <label id="email-label" className={emailErrorTag}>EMAIL OR PHONE NUMBER<span className="session-error-msg">{this.emailErrors()}</span>
//                         <span className="required-star">*</span>
//                     </label>
//                     <input id="email" className={emailErrorTag} type="email" value={this.state.email} onChange={this.handleInput('email')} spellCheck={false}/>
//                 </div>
//             </div>

//         );
//         const password = this.props.formType === "Sign Up" ? (
//             <div className="field">
//                 <label id="password-label" className={passwordErrorTag}>PASSWORD<span className="session-error-msg">{this.passwordErrors()}</span>
//                 </label>
//                 <input id="password" className={passwordErrorTag} type="password" value={this.state.password} onChange={this.handleInput('password')} />
//             </div>
//         ) : (
//             <div className="field">
//                 <label id="password-label" className={passwordErrorTag}>PASSWORD<span className="session-error-msg">{this.passwordErrors()}</span>
//                     <span className="required-star">*</span>
//                 </label>
//                 <input id="password" className={passwordErrorTag} type="password" value={this.state.password} onChange={this.handleInput('password')} />
//             </div>
//         );


//         const userName = this.props.formType === "Sign In" ? ("") : (
//             <div className="session-info-block-mb">
//                 <div className="field">
//                     <label id="username-label" className={usernameErrorTag}>USERNAME<span className="session-error-msg">{this.userNameErrors()}</span></label>
//                     <input id="username" type="text" value={this.state.username} onChange={this.handleInput('username')} spellCheck={false}/>
//                 </div>
//             </div>
//         );
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
//             <div className="b-day-container">
//                 <div className="field">
//                     <label id="birthday-label" className={birthdayErrorTag}>DATE OF BIRTH <span className="session-error-msg">{this.birthdayErrors()}</span></label>
//                     <div className="dropbox-selector">
//                         <select id="month" defaultValue="00" onChange={this.handleInput('month')}>
//                             <option value="00" disabled>
//                                 Month
//                             </option>
//                             <option value="01">January</option>
//                             <option value="02">February</option>
//                             <option value="03">March</option>
//                             <option value="04">April</option>
//                             <option value="05">May</option>
//                             <option value="06">June</option>
//                             <option value="07">July</option>
//                             <option value="08">August</option>
//                             <option value="09">September</option>
//                             <option value="10">October</option>
//                             <option value="11">November</option>
//                             <option value="12">December</option>
//                         </select>
//                         <select id="day" defaultValue="00" onChange={this.handleInput('day')}>
//                             <option value="00" disabled>Day</option>
//                             {days}
//                         </select>
//                         <select id="year" placeholder="Select" defaultValue="Select" onChange={this.handleInput('year')}>
//                             <option value="Select" disabled>Year</option>
//                             {years}
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         );


//         const submitButtonMessage = this.props.formType === "Sign In" ? (
//             <button className="session-action-submit-button" type="submit">
//                 <div className="session-action-txt">Log In</div>
//             </button>
//         ) : (
//             <div className="session-margin-top">
//                 <button className="session-action-submit-button" type="submit">
//                     <div className="session-action-txt">Continue</div>
//                 </button>
//             </div>
//         );
//         const headerMessage = this.props.formType === "Sign In" ? (<h1 className="header-welcome-back">Welcome Back!</h1>) :
//             (<h1 className="signup-header">Create an account</h1>);


//         const subHeaderMessage = this.props.formType === "Sign In" ? (
//             <div className="header-welcome-subtext">
//                 We're so excited to see you again!
//             </div>
//         ) : ("");

//         const signInAsDemoUser1 = (
//             <button type="submit" className="demo-login-button" onClick={() => this.loginAsDemoUser1()}>Demo 1 Login</button>
//         );
//         const signInAsDemoUser2 = (
//             <button type="submit" className="demo2-login-button" onClick={() => this.loginAsDemoUser2()}>Demo 2 Login</button>
//         );

//         const demoLogins = this.props.formType === "Sign Up" ? ("") : (
//             <>
//                 <div className="session-vertical-sep"></div>
//                 <div className="wumpus-qr-login-wrapper">
//                     <div className="wumpus-section-split">
//                         <div className="wumpus-inner-qr-login">
//                             <div className="wumpus-qr-code-container">
//                                 {/* <div className="wumpus-qr-container-wrapper">
//                                 <img className="strife-qr-gen" />
//                             </div>
//                             <div className="wumpus-qr-overlay-2">
//                                 <img className="wumboing" />
//                             </div> */}
//                                 <div className="wumpus-qr-overlay">
//                                     <img className={`wumpuslogin2 ${this.state.cubes === false ? `` : `is-hidden`}`} />
//                                     <span className={`spinning-cubes ${this.state.cubes === true ? `` : `is-hidden`}`}>
//                                         <span className="inner-cubes moving-cubes">
//                                             <span className="inner-cube"></span>
//                                             <span className="inner-cube"></span>
//                                         </span>
//                                     </span>
//                                 </div>
//                             </div>
//                             {signInAsDemoUser1}
//                             {signInAsDemoUser2}
//                             <h2 className="demo-login-text-2">Login with a Demo account</h2>
//                             <div className="session-text-size-md-normal">
//                                 {`and take a tour of `} <strong>$TR!F3</strong>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )

//         const forgotPassword = this.props.formType === "Sign In" ? (
//             <button type="button" className="forgotPassword-button-wrapper">
//                 <span className="forgotPassword"><Link to="/register">Forgot your password?</Link></span>
//             </button>
//         ) : ("");



//         const tos = this.props.formType === "Sign Up" ? (
//             <div className="tos-container">
//                 By registering, you agree to $TR!F3's{" "}
//                 <Link to="/register">Terms of Service</Link>
//                 {" "}and{" "}
//                 <Link to="/register">Privacy Policy</Link>
//                 .
//             </div>
//         ) : ("");


//         const navLinkType = this.props.formType === "Sign Up" ? (
//             <button className="already-have-account" type="button">
//                 <div className="already-have-account-link">
//                     {this.props.navLink}
//                 </div>
//             </button>
//         ) : (
//             <div className="session-mt-2">
//                 {this.props.navLink}
//             </div>
//         );




//         const formtype = this.props.formType === "Sign In" ? "box" : "box signup-box";



//         return (

//             <div className="session-form">
//                 <div className="session-background"></div>
//                 <div className="session-wrapper">
//                     <div id="box" className={formtype}>
//                         <div className="authBox">
//                             <form onSubmit={this.handleSubmit}>
//                                 <div className="centering-wrapper">
//                                     <div className="flex-session-layout">
//                                         <div className="main-login-container">
//                                             <div className="session-header-wrapper">
//                                                 {headerMessage}
//                                                 {subHeaderMessage}
//                                             </div>
//                                             <div className="session-info-block">
//                                                 {email}
//                                                 {userName}
//                                                 <div>
//                                                     {password}
//                                                 </div>
//                                                 {forgotPassword}
//                                                 {birthday}
//                                                 {submitButtonMessage}
//                                                 {navLinkType}
//                                                 {tos}
//                                             </div>
//                                         </div>
//                                         {demoLogins}
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         )

//     }

// }

// export default SessionForm;