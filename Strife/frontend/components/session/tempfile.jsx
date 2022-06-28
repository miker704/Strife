
//this file is use to store code temperoy will redoing for better changes


// //this file will combine both the sign/in/up forms to be rendered based on 
// //certain conditions


// import React from "react";
// import { Link } from "react-router-dom";


// class SessionForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = this.props.formType === 'Sign In' ? { email: "", password: "", emailError: "", passwordError: "" } : { email: "", username: "", birthday: "", password: "" };
//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.errors = this.errors.bind(this);
//         this.userNameErrors=this.userNameErrors.bind(this);
//         this.emailErrors = this.emailErrors.bind(this);
//         this.passwordErrors = this.passwordErrors.bind(this);
//         this.birthdayErrors = this.birthdayErrors.bind(this);
//         this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
//         this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);

//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         // this.props.removeErrors();
//         let submissionState = {};
//         if (this.props.formType === 'Sign Up') {
//             submissionState = {
//                 email: this.state.email,
//                 username: this.state.username,
//                 password: this.state.password,
//                 birthday: this.state.birthday
//                 // birthday: new Date(this.state.birthday)

//             }
//         }
//         else {
//             submissionState = {
//                 email: this.state.email,
//                 password: this.state.password
//             }
//         }

//         this.props.processForm(submissionState);
//     }

//     handleInput(field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value })
//         }
//     }


//     errors() {

//         return (
//             <ul>
//                 {this.props.errors.map((error, index) => (
//                     <li key={index}>{error}</li>
//                 ))}
//             </ul>
//         )
//     }

//     componentWillUnmount(){
//         this.props.removeSessionErrors();
//     }

//     loginAsDemoUser1() {
//         let demoUser = {
//             email: 'DemoUser1@strife.com',
//             password: 'qwerty1234'
//         }
//         this.props.processForm(demoUser);
//     }

//     loginAsDemoUser2() {
//         let demoUser = {
//             email: 'DemoUser2@strife.com',
//             password: 'QWERTY1234'
//         }
//         this.props.processForm(demoUser);
//     }


//     userNameErrors(){

//         let USERNAME_ERRORS = ['Username Must be between 2 and 32 in length',"Username can't be blank",'Username Must be between 2 and 32 in length']
//             if(this.props.formType==="Sign Up"){
//                 if(this.props.errors.includes(USERNAME_ERRORS[0])){
                  
//                     return "USERNAME - Must be between 2 and 32 in length";
//                 }
//                 else if(this.props.errors.includes("Username can't be blank")){
//                     return "Username can't be blank";
//                 }
//             }
//             return "";
//     }

//     emailErrors(){
//         const EMAIL_ERRORS =["Not well formed email address", "Must be 320 or fewer in Length", "Email can't be blank","Email has already been taken"];
//         // if(this.props.formType === "Sign In"){
//         //     if()
//         // }
    
//         if (this.props.formType === "Sign Up"){
//             // if(this.props.errors.includes(EMAIL_ERRORS[0])){
                  
//             //     return "Not well formed email address";
//             // }
//             // else if(this.props.errors.includes(EMAIL_ERRORS[1])){
//             //     return "Must be 320 or fewer in Length";
//             // }
//              if(this.props.errors.includes("Email can't be blank")){
//                 return "Email can't be blank";
//             }
//             else if(this.props.errors.includes("Email has already been taken")){
//                 return "Email has already been taken";
//             }
         
//         }
//         return "";
//     }

//     passwordErrors(){
//         const PASSWORD_ERRORS =["PASSWORD - Must be 72 or fewer in length", "Password is too short (minimum is 6 characters)", "Password can't be blank"];
//         // if(this.props.formType === "Sign In"){
//         //     if()
//         // }
//         if (this.props.formType === "Sign Up"){
//                 for(let i= 0; i<=PASSWORD_ERRORS.length;i++){
//                     if(this.props.errors.includes(PASSWORD_ERRORS[i])){
//                         return PASSWORD_ERRORS[i];
//                     }
//                 }
//         }
//         return "";
//     }

//     birthdayErrors(){
//         const BIRTHDAY_ERRORS =["Birthday can't be blank"]
//         // if(this.props.formType === "Sign In"){
//         //     if()
//         // }
//         if (this.props.formType === "Sign Up"){
             
//                     if(this.props.errors.includes(BIRTHDAY_ERRORS[0])){
//                         return BIRTHDAY_ERRORS[0];
//                     }
                
//         }
//         return "";
//     }


//     render() {

//         //assign variables to change classname tags depending if an error has occcured or not

//         let emailErrorTag= "";
//         let passwordErrorTag= "";
//         let birthdayErrorTag = "";
//         let usernameErrorTag = "";
//         if(this.props.formType === "Sign In"){
//             emailErrorTag = this.emailErrors() === "" ? "" : "login-error";
//             passwordErrorTag= this.passwordErrors() === "" ? "" : "login-error";
//         }
//         else if (this.props.formType === "Sign Up"){
//             emailErrorTag = this.emailErrors() === "" ? "" : "login-error";
//             passwordErrorTag= this.passwordErrors() === "" ? "" : "login-error";
//              birthdayErrorTag = this.birthdayErrors()=== "" ? "" : "login-error";
//              usernameErrorTag = this.userNameErrors()=== "" ? "" : "login-error";
//         }

//         //assign variables that will display content bassed if the form is sigin vs sign out
//         const email = (
//             <div className="field">
//                 <label id="email-label" className={emailErrorTag}>EMAIL{this.emailErrors()}</label>
//                 <input id="email" type="email"value={this.state.email} onChange={this.handleInput('email')}/>
//             </div>
//         );
//         let password;
        
//         let birthday;
//         const userName = this.props.formType === "Sign In" ? (""):(
//             <div className="field">
//                 <label id="username-label" className={usernameErrorTag}>USERNAME{this.userNameErrors}</label>
//                 <input id="username" type="text"value={this.state.username} onChange={this.handleInput('username')}/>
//             </div>
//         );

        
        
        
        
        
        
        
        
        
        
        
        
        
//         return (
//             <div className="session-signup-form">

//             <h2>Create an Account!</h2>
//             <form onSubmit={this.handleSubmit}>
                  
//                     {userName}
//                     {/* <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> */}
                    
//                     <div className="email-field">
//                         <label id="email-field" className={emailErrorTag}>
//                             EMAIL{this.emailErrors}
//                         </label>
//                         <input type="email" className={emailErrorTag} id="email"value={this.state.email} onChange={this.handleInput('email')}/>
//                     </div>
//                     {/* {email}
//                     <input type="email"value={this.state.email} onChange={this.handleInput('email')} /> */}
                  

                  
//                     {/* {birthday} */}
//                     <input type="date"value={this.state.birthday} onChange={this.handleInput('birthday')} />
//                     {/* {password} */}
                    

               
//                     <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
//                     <button type="submit">Create Account!</button>
//             </form>
// </div>
//         )
//     }

// }


// export default SessionForm;



import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { Link } from "react-router-dom";
class Splash extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="splash-home">
                
                {/* <NavBarContainer /> */}
                <div id="splash-div">
                    <div id="imagine-message">
                        <h2 id="imagine-header">IMAGINE A PLACE...</h2>
                        <p id="imagine-intro">...where you can belong to a school club, a gaming group,
                            or a worldwide art community.
                            Where just you and a handful of friends can spend time together.
                            A place that makes it easy to talk every day and hang out more often.
                        </p>
                        <Link to="/signup"><span id="signup-inner-text">Open Strife in the Browser!</span></Link>
                    </div>
                </div>
                <div className="white-div">
                    <img className="white-div-image-one" />
                    <div className="white-div-message">
                        <h3 className="white-div-header">Create an invite-only place where you belong</h3>
                        <p className="white-div-body">
                            Strife servers are organized into topic-based channels where you can
                            collaborate, share, and just talk about your day without clogging
                            up a group chat.
                        </p>
                    </div>
                </div>
                <div className="grey-div">
                    <div className="white-div-message">
                        <h3 className="white-div-header">Where hanging out is easy</h3>
                        <p className="white-div-body">
                            Grab a seat in a voice channel when you're free. Friends in your server can see you're around
                            and instantly pop in to talk without having to call.
                        </p>
                    </div>
                    <img className="grey-div-image-one" />
                </div>
                <div className="white-div">
                    <img className="white-div-image-two" />
                    <div className="white-div-message">
                        <h3 className="white-div-header">From few to a fandom</h3>
                        <p className="white-div-body">
                            Get any community running with moderation tools and custom member access. Give
                            members special powers, set up private channels, and more.
                        </p>
                    </div>
                </div>
                <div className="last_sec-div">
                    <img className="just_chillin_img" />
                    <div className="white-div-message">
                        <h3 className="white-div-header">Reliable Teach For Staying Close</h3>
                        <p className="white-div-body">
                        Low-latency voice and video feels like you're in the same room. Wave hello over video, 
                        watch friends stream their games, or gather up and have a drawing session with screen share.
                        </p>
                    </div>
                </div>


                <div className="grey-sign-up-div">
                    <div id="sign-up-items">
                        <h3 className="sign-up-div-header">Ready to start your journey?</h3>
                        <Link to="/signup">Open Strife in the Browser!</Link>
                    </div>
                </div>








            </div>
        )
    }

}





import React from "react";
import { Link } from "react-router-dom";



class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-nav">
          
                    <div id="site-intro">
                        <i className="fa-brands fa-discord fa-xl" />
                        <span id="site-name"> Strife </span>
                    </div>
                    <div className="splash-nav-links">
                        <a className="link" href="https://github.com/miker704"
                            target="_blank"> Github </a>
                        <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
                            target="_blank"> LinkedIn  </a>
                    </div>
                    <div id="login">
                        <Link to="/login">Login</Link>
                    </div>


                </div>
                )
    }
}

export default SplashNav;







// .splash-nav{
//     display: flex;
//     justify-content: space-between;
//     background-color: rgb(64, 78, 237);
//     color: white;
//     padding-top: 25px;
//     padding-bottom: 25px;
//     padding-right: 5%;
//     padding-left: 5%;
//     font-family: "Whitney", Arial, Helvetica, sans-serif;
//     font-size: 16px;
//     width: 90%;
//   }
  
  
//   .splash-home {
//     width: 100%;
//   }
  
//   #site-name{
//     font-weight: bold;
//   }
  
//   .splash-nav-links{
//     width: 30%;
//     display: flex;
//     justify-content: space-evenly;
//   }
  
//   .splash-nav-links .link{
//     padding-right: 10px;
//     padding-left: 10px;
//   }
  
//   .link{
//     color: white;
//     text-decoration: none;
//     cursor: pointer;
//     border: none;
//     font-size: 16px;
//   }
  
//   .splash-nav a:hover, .footer-list a:hover{
//     text-decoration: underline;
//   }
  
//   #login a{
//     background-color: white;
//     border: 1px solid white;
//     border-radius: 40px;
//     color: black;
//     text-decoration: none;
//     cursor: pointer;
//     font-size: 14px;
//     padding: 12px;
//   }
  
//   #login a:hover{
//     color: #5865F2;
//     text-decoration: none;
//   }
  
//   #splash-div {
//     height: 700px;
//     width: 100%;
//     color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-image: image_url('background2.png');
//     background-attachment: fixed;
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     overflow-x: hidden;
//     overflow-y: hidden;
    
//   }
  
//   #imagine-message{
//     position: relative;
//     text-align: center;
//     width: 50%;
//   }
  
//   #imagine-header{
//     font-size: 60px;
//     font-weight: 900;
//     text-transform: uppercase;
//     font-family: "Ginto Nord", Arial, Helvetica, sans-serif;
//   }
  
//   #imagine-intro{
//     font-size: 20px;
//     padding-bottom: 20px;
//   }
  
//   #imagine-message a, #sign-up-items a{
//     padding: 12px;
//     border: 1px solid white;
//     border-radius: 40px;
//     color: black;
//     text-decoration: none;
//     cursor: pointer;
//     font-size: 20px;
//     width: 270px;
//   }
  
//   #imagine-message a{
//     background-color: white;
//   }
  
//   #imagine-message a:hover{
//     color: #5865F2;
//   }
  
//   #sign-up-items a{
//     background-color: #5865F2;
//     color: white
//   }
  
//   #sign-up-items a:hover {
//     filter: brightness(125%);
//   }
  
//   // White/Grey divs CSS
  
//   .white-div, .grey-div{
//     height: 600px;
//     width: 90%;
//     min-height: 400px;
//     padding-left: 5%;
//     padding-right: 5%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
  
//   .grey-sign-up-div{
//     height: 100%;
//     width: 90%;
//     min-height: 300px;
//     padding-left: 5%;
//     padding-right: 5%;
//   }
  
//   .white-div{
//     background-color: white;
//   }
  
//   .grey-div, .grey-sign-up-div{
//     background-color: rgb(246,246,246) ;
//   }
  
//   .white-div-image-one{
//     content: image_url("textchat1.svg")
//   }
  
//   .white-div-image-two{
//     content: image_url("textchat2.svg")
//   }
  
//   .grey-div-image-one{
//     content: image_url("textchat3.svg")
//   }
  
//   // Reactability to smaller screen sizes.
//   @media only screen and (max-width: 1015px) {
//     .white-div-image-one, .white-div-image-two, .grey-div-image-one{
//       display: none;
//     }
  
//     .white-div-message, .white-div-header {
//       width: 80%
//     }
  
//     .white-div {
//     display: block;
//     }
  
//     #imagine-header {
//       font-size: 45px;
//     }
  
//     #imagine-text {
//       font-size: 20px;
//     }
//   }
  
//   @media only screen and (max-width: 600px){
//     #singup-footer a{
//       display: none;
//     }
  
//     #imagine-message a:after {
//       content: "Signup";
//     }
    
//     #signup-inner-text {
//       display: none;
//     }
//   }
  
//   .white-div-message{
//     width: 35%;
//   }
  
//   .white-div-header{
//     color: black;
//     font-weight: bolder; 
//     font-size: 48px;
//     font-family: "Ginto Normal";
//     padding-bottom: 25px;
//   }
  
//   .white-div-body{
//     font-size: 20px;
//   }
  
//   #sign-up-items{
//     padding-top: 50px;
//     text-align: center;
//   }
  
//   // Footer CSS
//   #footer{
//     height: 30%;
//     min-height: 400px;
//     width: 90%;
//     padding-right: 5%;
//     padding-left: 5%;
//     background-color: rgb(35,39,42);
//     color: white;
//   }
  
//   #footer-body{
//     display: flex;
//     justify-content: space-between;
//     align-content: center;
//     padding-bottom: 5%;
//     padding-top: 5%;
//     border-bottom: 1px solid #5865F2
//   }
  
//   #footer-message{
//     color: #5865F2;
//     font-weight: 900;
//     font-size: 32px;
//     width: 200px;
//   }
  
//   #footer-nav{
//     display: flex;
//     justify-content: space-between;
//     align-content: center;
//     padding-top: 20px;
//   }
  
//   #singup-footer a{
//     background-color: #5865F2;
//     border: 1px solid #5865F2;
//     border-radius: 40px;
//     color: white;
//     text-decoration: none;
//     cursor: pointer;
//     font-size: 14px;
//     padding: 12px;
//   }
  
//   #singup-footer a:hover {
//     filter: brightness(125%);
//   }
  
  
//   .footer-list {
//     color: #5865F2
//   }
  
//   .footer-list li{
//     padding-top: 15px;
//   }
  
//   #disclaimer{
//     text-align: center;
//   }
  
//   .sign-up-div-header{
//     color: black;
//     font-weight: bold;
//     font-size: 32px;
//     padding-bottom: 50px;
//     font-family: "Ginto Normal";
//   }