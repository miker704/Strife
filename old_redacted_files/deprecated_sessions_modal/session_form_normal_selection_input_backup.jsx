// // session form currently ion use but uses the normal select input
// // instead of the mui select


// import React from "react";
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import SessionBackgroundSvgComponent from "./sessionBackgroundSvg.jsx";


// const SessionForm = (props) => {

//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [birthday, setBirthday] = useState('');
//     const [month, setMonth] = useState('');
//     const [day, setDay] = useState('');
//     const [year, setYear] = useState('');
//     const [cubes, setCubes] = useState(false);
//     const [intervalId, setIntervalId] = useState(0);
//     const intervalRef = useRef(null);


//     useEffect(() => {

//         if (props.formType === "Sign In") {
//             qrCubeSpinner();
//         }

//         return function cleanUp () {
//             if (props.errors.length > 0) {
//                 props.removeSessionErrors();
//             }
//             clearInterval(intervalRef.current);
//         }

//     }, []);


//     const setCubeSpinning = () => {
//         setCubes((prevValue) => !prevValue)
//     }

//     const qrCubeSpinner = () => {

//         let setIID = setInterval(() => {
//             if (cubes === false) {
//                 setCubeSpinning();
//                 setTimeout(() => {
//                     setCubeSpinning();
//                 }, 10000);
//             }
//         }, 20000);

//         intervalRef.current = setIID;
//     };



//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (props.errors.length > 0) {
//             props.removeSessionErrors();
//         }
//         let submissionState = {};
//         if (props.formType === 'Sign Up') {
//             submissionState = {
//                 email: email,
//                 username: username,
//                 password: password,
//                 birthday: new Date(month + "/" + day + "/" + year),
//             }
//         }
//         else {
//             submissionState = {
//                 email: email,
//                 password: password
//             }
//         }



//         // props.processForm(submissionState);

//         props.processForm(submissionState).then(() => {
//             props.history.push("/$/loading/");
//         });

//         console.log("submisssion state");
//         console.table(submissionState);

//     }

//     const birthdayErrors = () => {
//         const BIRTHDAY_ERRORS = ["Birthday can't be blank"];

//         if (props.formType === "Sign Up") {

//             if (props.errors.includes("Birthday can't be blank")) {
//                 return "can't be blank"
//             }

//         }
//         return "";
//     }


//     const passwordErrors = () => {

//         const PASSWORD_ERRORS = [
//             'Login or password is invalid',
//             "Password can't be blank",
//             "Password is too long (maximum is 72 characters)",
//             "Password is too short (minimum is 8 characters)"
//         ];

//         const PASSWORD_ERROR_MESSAGES = {
//             0: "Login or password is invalid",
//             1: "can't be blank",
//             2: "Must be 72 or fewer in length",
//             3: "Must be at least 8 characters long"
//         };

//         if (props.formType === "Sign In") {
//             if (props.errors.includes('Login or password is invalid')) {
//                 return "Login or password is invalid";
//             }
//         }
//         else {
//             for (let i = 0; i < PASSWORD_ERRORS.length; i++) {
//                 if (props.errors.includes(PASSWORD_ERRORS[i])) {
//                     return PASSWORD_ERROR_MESSAGES[i];
//                 }
//             }
//         }

//         return "";
//     }


//     const userNameErrors = () => {

//         let USERNAME_ERRORS = [
//             "Username can't be blank",
//             'Username is too short (minimum is 2 characters)',
//             'Username is too long (maximum is 32 characters)'
//         ];

//         let USERNAME_ERROR_MESSAGES = {
//             0: "This field is required",
//             1: 'Must be between 2 and 32 in length',
//             2: 'Must be between 2 and 32 in length'
//         };

//         if (props.formType === "Sign Up") {
//             for (let i = 0; i < USERNAME_ERRORS.length; i++) {
//                 if (props.errors.includes(USERNAME_ERRORS[i])) {
//                     return USERNAME_ERROR_MESSAGES[i];
//                 }
//             }

//         }
//         return "";
//     }



//     const emailErrors = () => {

//         const EMAIL_ERRORS = [
//             "Email can't be blank",
//             "Email Not well formed email address",
//             "Email Must be 320 or fewer in Length",
//             "Email has already been taken",
//             'Login or password is invalid'
//         ];

//         const EMAIL_ERROR_MESSAGES = {
//             0: "can't be blank",
//             1: "Not well formed email address",
//             2: "Must be 320 or fewer in length",
//             3: "Email is already registered ",
//             4: "Login or password is invalid"
//         }


//         if (props.formType === "Sign In") {
//             if (props.errors.includes('Login or password is invalid')) {
//                 return "Login or password is invalid";
//             }
//         }

//         else {
//             for (let i = 0; i < EMAIL_ERRORS.length; i++) {
//                 if (props.errors.includes(EMAIL_ERRORS[i])) {
//                     return EMAIL_ERROR_MESSAGES[i];
//                 }
//             }

//         }


//         return "";
//     }




//     const errors = () => {

//         return (
//             <ul>
//                 {props.errors.map((error, index) => (
//                     <li key={index}>{error}</li>
//                 ))}
//             </ul>
//         )
//     }

//     const loginAsDemoUser1 = () => {

//         let demoUser = {
//             email: 'DemoUser1@strife.com',
//             password: 'qwerty1234'
//         }
//         setEmail(demoUser.email)
//         setPassword(demoUser.password);
//         // this.props.processForm(demoUser).then(() => {
//         //     this.props.history.push("/$/loading/");
//         // });
//         // this.props.processForm(demoUser);

//     }

//     const loginAsDemoUser2 = () => {
//         let demoUser2 = {
//             email: 'DemoUser2@strife.com',
//             password: 'QWERTY1234'
//         }

//         setEmail(demoUser2.email)
//         setPassword(demoUser2.password);
//         // this.props.processForm(demoUser2).then(() => {
//         //     this.props.history.push("/$/loading/");
//         // });
//         // this.props.processForm(demoUser2);
//     }


//     const signInAsDemoUser1 = (
//         <button type="submit" className="demo-login-button" onClick={() => loginAsDemoUser1()}>Demo 1 Login</button>
//     );
//     const signInAsDemoUser2 = (
//         <button type="submit" className="demo2-login-button" onClick={() => loginAsDemoUser2()}>Demo 2 Login</button>
//     );


//     let userNameField = props.formType === "Sign In" ? ("") : (
//         <div>
//             <div className='session-info-block-mb'>
//                 <label className={`session-label ${userNameErrors() !== "" ? `session-error` : ``}`}>
//                     Username
//                     {
//                         props.errors.length > 0 && userNameErrors() !== "" ? (
//                             <span className='session-error-message'>
//                                 <span className='session-error-message-seperator'>-</span>
//                                 {userNameErrors()}
//                             </span>
//                         ) : ("")
//                     }
//                 </label>
//                 <div className='session-input-inner-wrapper'>
//                     <input className="session-input" type="text"
//                         spellCheck={false} maxLength={999}
//                         value={username}
//                         onChange={(e) => setUsername(e.currentTarget.value)}
//                     />
//                 </div>
//             </div>
//         </div>

//     )



//     let emailField = props.formType === "Sign In" ? (

//         <div className='session-info-block-mb'>
//             <label className={`session-label ${emailErrors() !== "" ? `session-error` : ``}`}>
//                 Email or Phone Number
//                 {
//                     props.errors.length > 0 && emailErrors() !== "" ? (
//                         <span className='session-error-message'>
//                             <span className='session-error-message-seperator'>-</span>
//                             {emailErrors()}
//                         </span>
//                     ) : (
//                         <span className="required-star">*</span>
//                     )
//                 }
//             </label>
//             <div className='session-input-wrapper'>
//                 <div className='session-input-outer-wrapper'>
//                     <input className="session-input" type="email" required={true}
//                         spellCheck={false} autoCorrect='off' maxLength={999}
//                         autoComplete='off' autoCapitalize='none'
//                         value={email} autoFocus={true}
//                         onChange={(e) => setEmail(e.currentTarget.value)}
//                     />
//                 </div>
//             </div>
//         </div>


//     ) : (
//         <div className='session-info-block-mb'>
//             <label className={`session-label ${emailErrors() !== "" ? `session-error` : ``}`}>
//                 Email
//                 {
//                     props.errors.length > 0 && emailErrors() !== "" ? (
//                         <span className='session-error-message'>
//                             <span className='session-error-message-seperator'>-</span>
//                             {emailErrors()}
//                         </span>
//                     ) : ("")
//                 }
//             </label>
//             <div className='session-input-inner-wrapper'>
//                 <input className="session-input" type="email"
//                     spellCheck={false} autoCorrect='off' maxLength={999}
//                     value={email} autoFocus={true}
//                     onChange={(e) => setEmail(e.currentTarget.value)}
//                 />
//             </div>
//         </div>
//     )



//     let passwordField = props.formType === "Sign In" ? (
//         <div>
//             <label className={`session-label ${passwordErrors() !== "" ? `session-error` : ``}`}>
//                 Password
//                 {
//                     props.errors.length > 0 && passwordErrors() !== "" ? (
//                         <span className='session-error-message'>
//                             <span className='session-error-message-seperator'>-</span>
//                             {passwordErrors()}
//                         </span>
//                     ) : (
//                         <span className="required-star">*</span>
//                     )
//                 }
//             </label>
//             <div className='session-input-inner-wrapper'>
//                 <input className="session-input" type="password"
//                     spellCheck={false} maxLength={999}
//                     autoComplete='off' value={password}
//                     onChange={(e) => setPassword(e.currentTarget.value)}
//                 />
//             </div>
//         </div>

//     ) : (
//         <div>
//             <label className={`session-label ${passwordErrors() !== "" ? `session-error` : ``}`}>
//                 Password
//                 {
//                     props.errors.length > 0 && passwordErrors() !== "" ? (
//                         <span className='session-error-message'>
//                             <span className='session-error-message-seperator'>-</span>
//                             {passwordErrors()}
//                         </span>
//                     ) : ("")
//                 }
//             </label>
//             <div className='session-input-inner-wrapper'>
//                 <input className="session-input" type="password"
//                     spellCheck={false} maxLength={999}
//                     autoComplete='off' value={password}
//                     onChange={(e) => setPassword(e.currentTarget.value)}
//                 />
//             </div>
//         </div>
//     )

//     const demoLogins = props.formType === "Sign Up" ? ("") : (
//         <>
//             <div className="session-vertical-sep"></div>
//             <div className="wumpus-qr-login-wrapper">
//                 <div className="wumpus-section-split">
//                     <div className="wumpus-inner-qr-login">
//                         <div className="wumpus-qr-code-container">
//                             <div className="wumpus-qr-overlay">
//                                 {
//                                     cubes === true ? (
//                                         <span className={`spinning-cubes`}>
//                                             <span className="inner-cubes moving-cubes">
//                                                 <span className="inner-cube"></span>
//                                                 <span className="inner-cube"></span>
//                                             </span>
//                                         </span>

//                                     ) : (
//                                         <img className={`wumpuslogin2`} alt=" " />
//                                     )
//                                 }
//                             </div>
//                         </div>
//                         {signInAsDemoUser1}
//                         {signInAsDemoUser2}
//                         <h2 className="demo-login-text-2">Login with a Demo account</h2>
//                         <div className="session-text-size-md-normal">
//                             {`and take a tour of `} <strong>$TR!F3</strong>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )




//     const headerMessage = props.formType === "Sign In" ? (<h1 className="authBox-header-h1">Welcome back!</h1>) :
//         (<h1 className="signup-header">Create an account</h1>);


//     const subHeaderMessage = props.formType === "Sign In" ? (
//         <div className="authBox-header-subtext">
//             We're so excited to see you again!
//         </div>
//     ) : ("");



//     const submitButtonMessage = props.formType === "Sign In" ? (
//         <button className="session-action-submit-button" type="submit">
//             <div className="session-action-txt">Log In</div>
//         </button>
//     ) : (
//         <div className="session-margin-top">
//             <button className="session-action-submit-button" type="submit">
//                 <div className="session-action-txt">Continue</div>
//             </button>
//         </div>
//     );

//     const forgotPassword = props.formType === "Sign In" ? (
//         <button type="button" className="forgotPassword-button-wrapper">
//             <span className="forgotPassword"><Link to="/register">Forgot your password?</Link></span>
//         </button>
//     ) : ("");

//     const navLinkType = props.formType === "Sign Up" ? (
//         <button className="already-have-account" type="button">
//             <div className="look-filled-button-contents global-button-contents">
//                 <Link to="/login">Already have an account?</Link>
//             </div>
//         </button>
//     ) : (
//         <div className='session-mt'>
//             <span className='needAnAccount'>Need an account?</span>
//             <button type="button" className='needAnAccount-button'>
//                 <div className="look-filled-button-contents global-button-contents">
//                     <Link to="/register">Register</Link>
//                 </div>
//             </button>
//         </div>
//     );

//     const tos = props.formType === "Sign Up" ? (
//         <div className="tos-container">
//             By registering, you agree to $TR!F3's{" "}
//             <Link to="/register">Terms of Service</Link>
//             {" "}and{" "}
//             <Link to="/register">Privacy Policy</Link>
//             .
//         </div>
//     ) : ("");




//     //drop box functions discord does not use the normal html date input tag 
//     const days = new Array();
//     for (let i = 1; i <= 31; i++) {
//         days.push(<option key={i} value={i}>{i}</option>);
//     }

//     //to future proof this  we use the current year right now
//     let timeNow = new Date();
//     let currentYear = timeNow.getFullYear();
//     const years = new Array();
//     for (let i = 0; i <= 150; i++) {
//         years.push(<option key={i} value={currentYear - i}>{currentYear - i}</option>);
//     }


//     const birthdayField = props.formType === "Sign In" ? ("") : (
//         <fieldset className="b-day-container">
//             <legend className={`b-day-legend ${birthdayErrors() !== "" ? `session-error` : ``}`}>
//                 DATE OF BIRTH
//                 {
//                     props.errors.length > 0 && birthdayErrors() !== "" ? (
//                         <span className='session-error-message'>
//                             <span className='session-error-message-seperator'>-</span>
//                             {birthdayErrors()}
//                         </span>
//                     ) : ("")
//                 }
//             </legend>
//             <div className="dropbox-selector">
//                 <select id="month" defaultValue="00" onChange={(e) => setMonth(e.currentTarget.value)}>
//                     <option value="00" disabled>
//                         Month
//                     </option>
//                     <option value="01">January</option>
//                     <option value="02">February</option>
//                     <option value="03">March</option>
//                     <option value="04">April</option>
//                     <option value="05">May</option>
//                     <option value="06">June</option>
//                     <option value="07">July</option>
//                     <option value="08">August</option>
//                     <option value="09">September</option>
//                     <option value="10">October</option>
//                     <option value="11">November</option>
//                     <option value="12">December</option>
//                 </select>
//                 <select id="day" defaultValue="00" onChange={(e) => setDay(e.currentTarget.value)}>
//                     <option value="00" disabled>Day</option>
//                     {days}
//                 </select>
//                 <select id="year" placeholder="Select" defaultValue="Select" onChange={(e) => setYear(e.currentTarget.value)}>
//                     <option value="Select" disabled>Year</option>
//                     {years}
//                 </select>
//             </div>
//         </fieldset>
//     );

//     const formtype = props.formType === "Sign In" ? "expanded" : "";

//     return (

//         <div className='session-app-container'>
//             <div className='session-character-background'>
//                 <SessionBackgroundSvgComponent />
//                 <div className='session-wrapper'>
//                     <div>
//                         <div>
//                             <form onSubmit={handleSubmit} className={`theme-dark authBox ${formtype}`}>
//                                 <div className='strife-full-logo'></div>
//                                 <div className='authbox-centering-wrapper'>
//                                     <div className='authBox-flex' style={{ flex: `1 1 auto` }}>
//                                         <div className='authBox-MainLoginContainer'>
//                                             <div className='authBox-header'>
//                                                 {headerMessage}
//                                                 {subHeaderMessage}
//                                             </div>
//                                             <div className='session-info-block'>
//                                                 {emailField}
//                                                 {userNameField}
//                                                 {passwordField}
//                                                 {birthdayField}
//                                                 {forgotPassword}
//                                                 {submitButtonMessage}
//                                                 {tos}
//                                                 {navLinkType}
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
//         </div>
//     )

// }

// export default SessionForm;
