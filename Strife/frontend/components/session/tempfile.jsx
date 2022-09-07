
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







//// custome routes user home /channels/@me upon sign in 
///channels/ redirects to /channels/@me 
//clicking nitro goes to /store
//



{/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path fill-rule="evenodd" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z">
    </path>
    <circle cx="9" cy="8" r="4" fill-rule="evenodd"></circle>
    <path fill-rule="evenodd" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98
         5.98 0 010 7.52c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z">
    </path>
</svg> */}




return (
    <div className='dm-server-nav-bar'>
        <div className="fake-nav-bar" />
        <div className="split-line" />
        <div className='friends-nav-bar-wrapper'>
            <div className='friends-nav-bar'>
                <Link className='friends-nav-bar-link' to={`/channels/@me`}>

                    <div className='friend-avatar-wrapper'>
                        <div className='friend-avatar'>
                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="currentColor" fillRule="nonzero"
                                        d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 
                                                15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 
                                                C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 
                                                17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)">

                                    </path>
                                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 
                                                L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className='friend-avatar-text-wrapper'>
                            <div className='friend-avatar-text-inner'>
                                <div className='friend-avatar-text'>Friends</div>
                            </div>
                        </div>

                    </div>


                </Link>
            </div>
        </div>

        <div className='nitro-nav-bar-wrapper'>
            <div className='nitro-nav-bar'>
                <div className='nitro-nav-bar-link'>
                    <div className='nitro-avatar-wrapper'>
                        <div className='nitro-avatar'>
                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 
                                                L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 
                                                1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 
                                                2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 
                                                C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001
                                                 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,
                                                 11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 
                                                 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 
                                                 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 
                                                 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 
                                                 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 
                                                 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 
                                                 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 
                                                 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 
                                                 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 
                                                 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 
                                                 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 
                                                 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 
                                                 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 
                                                 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 
                                                 16.8462589,9.84548582 Z">
                                </path>
                            </svg>
                        </div>
                        <div className='nitro-avatar-text-wrapper'>
                            <div className='nitro-avatar-text-inner'>
                                <div className='nitro-avatar-text'>
                                    Nitro
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='strife-nitro-lbl1'>
                        <div className='strife-nitro-img1'>
                            <svg className='strife-nitro-clock1' aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 20 20">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="currentColor" d="M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708
                                                     1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334
                                                      18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999
                                                       1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667
                                                        5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145
                                                         14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937
                                                          10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572
                                                           9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675
                                                            9.99999 4.66675Z">
                                    </path></g>
                            </svg>

                            1 month free</div>
                    </div>
                </div>
            </div>
        </div>

        <br />



        <div className="dm-list-header">
            <h4>DIRECT MESSAGES</h4>
            <div className="create-channel-div" onClick={() => this.toggleSearch()}>
                <div className="dm-tool-tip">
                    {/* <span>Create DM</span> */}
                    Create DM
                </div>
            </div>
        </div>
        {/* {this.renderSearch()} */}
        <ul className="dm-nav-bar-list">
            {this.props.dmServers.map((dmServer, dmServerIndex) => {
                let selectedDmServer = this.props.dmServerId === dmServer.id.toString()
                    ? "selected-dm-server" : "";

                let dmServerMembers = Object.values(dmServer.members);
                let dmServerName = this.generateDmServerName(dmServer);
                let dmServerSubtitle = dmServerMembers.length > 2 ? `${dmServerMembers.length} Members` : "";
                let dmServerPFP = this.renderDmServerPFP(dmServerMembers);

                return (

                    <Link to={`/channels/@me/${dmServer.id}`}
                        className={selectedDmServer}
                        onClick={() => this.props.fetchDmServer(dmServer.id)}
                        key={dmServer.id}
                    >
                        <li className={`dm-server-li-item ${selectedDmServer}`} key={dmServerIndex}>
                            <div className='dm-server-pfp'>
                                {dmServerPFP}
                                <div className='dm-server-name-wrapper'>
                                    <h5 className='dm-server-name'>{dmServerName}</h5>
                                    <p className='dm-server-subtitle'>{dmServerSubtitle}</p></div>
                            </div>
                        </li>
                    </Link>



                )

            })
            }
        </ul>
    </div>
)




// document.querySelector("#bottompage").addEventListener("click", () => {
//     var scrollingElement = (document.scrollingElement || document.body);
//     scrollingElement.scrollTop = scrollingElement.scrollHeight;
// })

//            button{
//     float: right;
//     background - color: yellow;
//     color: red;
// }


//            < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Scroll Automatically</title>
//         </head>
//         <body id='main_body'>
//             <button id="bottompage">Bottom</button>
//             <div id="headingone">
//                 <h1>Heading One</h1>
//                 <img src="https://media.istockphoto.com/photos/programming-code-abstract-             			technology-background-of-software-developer-picture-id1294521676?                   			b=1&k=20&m=1294521676&s=170667a&w=0&h=7pqhrZcqqbQq43Q0_TD0Y_YjInAyvA9xiht9bto030U=" alt="Programming Picture">
//                     <p>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 			has been the industry's standard dummy text ever since the 1500s, when an unknown printer 		  took a galley of type and scrambled it to make a type specimen book. It has survived not 		   only five centuries, but also the leap into electronic typesetting, remaining essentially 		 unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 		   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 				PageMaker including versions of Lorem Ipsum.
//                     </p>
//             </div>
//             <div id="headingtwo">
//                 <h1>Heading Two</h1>
//                 <img src="https://media.istockphoto.com/photos/programming-code-abstract-technology-      		  background-of-software-developer-picture-id1294521676?                      					b=1&k=20&m=1294521676&s=170667a&w=0&h=7pqhrZcqqbQq43Q0_TD0Y_YjInAyvA9xiht9bto030U=" alt="Programming Picture">
//                     <p>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem        	 	Ipsum has been the industry's standard dummy text ever since the 1500s, when an         		unknown printer took a galley of type and scrambled it to make a type specimen book.       		 It has survived not only five centuries, but also the leap into electronic           			typesetting, remaining essentially unchanged. It was popularised in the 1960s with        		  the release of Letraset sheets containing Lorem Ipsum passages, and more recently         		with desktop publishing software like Aldus PageMaker including versions of Lorem         		  Ipsum.
//                     </p>
//             </div>
//             <div id="headingthree">
//                 <h1>Heading Three</h1>
//                 <img src="https://media.istockphoto.com/photos/programming-code-abstract-technology-      		  background-of-software-developer-picture-id1294521676?                      					b=1&k=20&m=1294521676&s=170667a&w=0&h=7pqhrZcqqbQq43Q0_TD0Y_YjInAyvA9xiht9bto030U=" alt="Programming Picture">
//                     <p>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem        		Ipsum has been the industry's standard dummy text ever since the 1500s, when an         		unknown printer took a galley of type and scrambled it to make a type specimen book.       		 It has survived not only five centuries, but also the leap into electronic           			typesetting, remaining essentially unchanged. It was popularised in the 1960s with        		  the release of Letraset sheets containing Lorem Ipsum passages, and more recently         		with desktop publishing software like Aldus PageMaker including versions of Lorem         		  Ipsum.
//                     </p>
//             </div>
//             <h1> Hi There! </h1>
//         </body>
//     </html>