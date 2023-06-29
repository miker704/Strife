// deprecated switched to a functional based component and moved server
// creation from template option to the backend

// import React from "react";
// import { Link } from 'react-router-dom';

// class CreateServerForm extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             server_owner_id: this.props.currentUser.id,
//             server_name: `${this.props.currentUser.username}'s server`,
//             public: true, //true by default
//             form_number: 1,
//             forward: true,
//             joiningServer: false,
//             invite_code: "",
//             submissionType: "",
//             invalidInviteCode: "*",
//             //server channel types based on form clicking
//             //server privacy type based on form slections
//             serverGenreType: "",
//             serverPrivacy: "",

//             //file handleing 
//             server_Icon_Url: null,
//             server_Icon: ''

//         }
//         this.file_input = null;
//         this.handleFileProcessing = this.handleFileProcessing.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.handleJoinServer = this.handleJoinServer.bind(this);
//         this.handleJoinServerClick = this.handleJoinServerClick.bind(this)
//         this.handleSlideBackward = this.handleSlideBackward.bind(this);
//         this.handleSlideForward = this.handleSlideForward.bind(this);
//         this.handleInviteCode = this.handleInviteCode.bind(this);
//         this.stopProc = this.stopProc.bind(this);
//         this.renderErrors = this.renderErrors.bind(this);
//         this.renderServerInviteErrors = this.renderServerInviteErrors.bind(this);
//         this.renderServerErrors = this.renderServerErrors.bind(this);
//         this.submissionBlocker = this.submissionBlocker.bind(this);
//         this.closeModalTransitionOut = this.closeModalTransitionOut.bind(this);

//     }


//     handleFileProcessing (e) {
//         e.preventDefault();
//         const fileReader = new FileReader();
//         const file = e.currentTarget.files[0];
//         fileReader.onloadend = () => {
//             this.setState({
//                 server_Icon: file,
//                 server_Icon_Url: fileReader.result
//             });
//         };

//         if (file) {
//             fileReader.readAsDataURL(file);
//         }
//         else {
//             this.setState({
//                 server_Icon: null,
//                 server_Icon_Url: ''
//             });
//         }

//     }


//     closeModalTransitionOut () {


//         // this.setState({
//         //     server_owner_id: this.props.currentUser.id,
//         //     server_name: `${this.props.currentUser.username}'s server`,
//         //     public: true, //true by default
//         //     form_number: 1,
//         //     forward: true,
//         //     joiningServer: false,
//         //     invite_code: "",
//         //     submissionType: "",
//         //     invalidInviteCode: "*",
//         //     //server channel types based on form clicking
//         //     //server privacy type based on form slections
//         //     serverGenreType: "",
//         //     serverPrivacy: "",
//         // })
//         let modalToClose = document.getElementById("create-A-Server-Modal");

//         modalToClose.classList.add("transition-out");
//         modalToClose.className = "create-A-Server-Modal transition-out";

//         setTimeout(() => {
//             this.props.removeServerErrors();
//             this.props.removeChannelErrors();
//             this.props.closeModal();
//         }, 100);

//     }

//     componentDidMount () {
//         window.addEventListener('keyup', this.props.handleESC, false);
//     }

//     stopProc (e) {
//         e.preventDefault();
//     }



//     renderErrors () {
//         return (
//             <ul>
//                 {this.props.errors.map((errormsg, idx) => {
//                     <li className="rendered-error" key={idx}>
//                         {errormsg}
//                     </li>
//                 })}

//             </ul>
//         );
//     }



//     componentWillUnmount () {
//         this.props.removeServerErrors();
//         window.removeEventListener('keyup', this.props.handleESC, false);
//     }




//     handleSubmit (e) {
//         // e.preventDefault();
//         let serverSubmission = {};

//         const createServerFormData = new FormData();





//         //if server genre is of local type 
//         let serverChannelSetup = {};
//         switch (this.state.serverGenreType) {
//             case 'Local Community':
//                 serverChannelSetup = {
//                     channelInfoNames: ['welcome-and-rules', "announcements", 'resources'],
//                     channelTextNames: ["meeting-plans", 'off-topic'],
//                     channelVoiceNames: ['Lounge', "Meeting Room"],

//                 };
//                 break;
//             case 'Artists & Creators':
//                 serverChannelSetup = {
//                     channelInfoNames: ['welcome-and-rules', "announcements"],
//                     channelTextNames: ["events", 'ideas-and-feedback'],
//                     channelVoiceNames: ['Lounge', 'Community Hangout', "Stream Room"],

//                 };
//                 break;

//             case 'Friends':
//                 serverChannelSetup = {
//                     channelInfoNames: [],
//                     channelTextNames: ["games", 'music'],
//                     channelVoiceNames: ['Lounge', "Stream Room"],

//                 };
//                 break;

//             case 'Study Group':
//                 serverChannelSetup = {
//                     channelInfoNames: ['welcome-and-rules', 'notes-resources'],
//                     channelTextNames: ["homework-help", 'session-planning', 'off-topic'],
//                     channelVoiceNames: ['Lounge', "Study Room 1", "Study Room 2"],

//                 };
//                 break;

//             case 'School Club':
//                 serverChannelSetup = {
//                     channelInfoNames: ['welcome-and-rules', "announcements", 'resources'],
//                     channelTextNames: ["meeting-plans", 'off-topic'],
//                     channelVoiceNames: ['Lounge', "Meeting Room 1", "Meeting Room 2"],

//                 };
//                 break;

//             case 'Gaming':
//                 serverChannelSetup = {
//                     channelInfoNames: [],
//                     channelTextNames: ["clips-and-highlights"],
//                     channelVoiceNames: ['Lobby', "Gaming"],

//                 };
//                 break;

//             default:
//                 serverChannelSetup = {
//                     channelInfoNames: [],
//                     channelTextNames: [],
//                     channelVoiceNames: ['General'],

//                 };
//                 break;

//         }

//         if (this.state.serverPrivacy === "public") {

//             this.setState({ public: true });

//             serverSubmission = {
//                 server_owner_id: this.props.currentUser.id,
//                 server_name: this.state.server_name,
//                 public: this.state.public, //true by default

//             }

//             createServerFormData.append(`server[server_owner_id]`, this.props.currentUser.id);
//             createServerFormData.append(`server[server_name]`, this.state.server_name);
//             createServerFormData.append(`server[public]`, this.state.public);
//             if (this.state.server_Icon) {
//                 createServerFormData.append(`server[server_Icon]`, this.state.server_Icon);
//             }
//         }
//         else if (this.state.serverPrivacy === "private") {

//             this.setState({ public: false });

//             serverSubmission = {
//                 server_owner_id: this.props.currentUser.id,
//                 server_name: this.state.server_name,
//                 public: this.state.public, //true by default

//             }
//             createServerFormData.append(`server[server_owner_id]`, this.props.currentUser.id);
//             createServerFormData.append(`server[server_name]`, this.state.server_name);
//             createServerFormData.append(`server[public]`, this.state.public);
//             if (this.state.server_Icon) {

//                 createServerFormData.append(`server[server_Icon]`, this.state.server_Icon);
//             }

//         }





//         let newServer;
//         let channel_type;
//         //create the new server then if the server is using one of the performed templates 
//         //create the channels to set up the server 
//         // this.props.action(serverSubmission).then((action) => {
//         this.props.action(createServerFormData).then((action) => {

//             newServer = action.server;
//             // newServer = action.server.server;



//             //
//             for (let i in serverChannelSetup) {
//                 //if template for server has no channels in the in any of the 3 catergories skip it  
//                 if (serverChannelSetup[i].length === 0) {
//                     continue;
//                 }
//                 else {

//                     if (i === 'channelInfoNames' || i === 'channelTextNames') {
//                         channel_type = 1;
//                     }
//                     else if (i === 'channelVoiceNames') {
//                         channel_type = 2;

//                     }

//                     for (let e of serverChannelSetup[i]) {
//                         let channelHash = new Object();
//                         channelHash = {
//                             server_id: newServer.id,
//                             channel_name: e,
//                             channel_type: channel_type
//                         }

//                         this.props.createChannelSetup(channelHash);

//                     }

//                 }
//             }



//         }).then(() => {
//             setTimeout(() => {
//                 this.props.removeServerErrors();
//                 this.props.removeChannelErrors();
//                 // this.props.closeModal();
//                 this.closeModalTransitionOut();

//             }, 100);
//         }).then(() => {
//             this.props.reSyncCurrentUser(this.props.currentUserId).then(() => {
//                 this.props.history.push(`/$/channels/${newServer.id}/${newServer.general_channel_id}`);
//             })
//         })



//     }

//     handleInput (e) {
//         // e.preventDefault();
//         return (e) => this.setState({ server_name: e.currentTarget.value });

//     }


//     submissionBlocker () {
//         if (document.getElementById("servernameInput").value === "" || document.getElementById("servernameInput").value === null) {
//             document.getElementById("serverCreateButton").disabled = true;
//         }
//         else {
//             document.getElementById("serverCreateButton").disabled = false;
//         }
//     }


//     handleJoinServerClick (e) {
//         let currentSlide = this.state.form_number;
//         this.setState({
//             form_number: currentSlide + 1,
//             forward: true,
//             joiningServer: true
//         });
//     }


//     renderServerErrors () {
//         //NOTE: we dont need to bother with channel errors here as channel created here are created  
//         //upon server creation so it is impossible to have dups of same channel names
//         //server errors


//         let serverErrorList = [
//             'Server owner You already have a server with that name already',
//             "Server name can't be blank",
//             'Server name is too short (minimum is 2 characters)',
//             "Server name is too long (maximum is 100 characters)",
//             // 'You cannot destroy a server that is not yours !',

//         ]
//         //Must be between 2 and 100 in length;

//         //error messages can be a bit big lets make a reduced version 
//         let serverErrorMessages = {
//             0: " - You already own a Server with that name already",
//             1: " - Server name can't be blank",
//             2: ' - Must be between 2 and 100 in length',
//             3: " - Must be between 2 and 100 in length",
//         }

//         for (let i = 0; i < serverErrorList.length; i++) {
//             if (this.props.errors.includes(serverErrorList[i])) {
//                 return serverErrorMessages[i];
//             }
//         }

//         return "";
//     }



//     renderServerInviteErrors () {

//         //invite code errors
//         //these errors are for joining via an invite they return different results

//         if (this.props.errors.includes('Error You are already a member of this server')) {

//             this.inviteCodeErrors = "ERROR";
//             return this.inviteCodeErrorMessage = ' - You are already a member of this server';

//         }
//         else if (this.props.errors.includes('Error The invite is invalid or has expired.')) {

//             this.inviteCodeErrors = "ERROR";
//             return this.inviteCodeErrorMessage = ' - The invite is invalid or has expired.';

//         }
//         else if (this.props.errors.includes('The invite is invalid or has expired.')) {

//             this.inviteCodeErrors = "ERROR";
//             return this.inviteCodeErrorMessage = ' - The invite is invalid or has expired.';

//         }


//         return "";
//     }


//     handleJoinServer (e) {
//         // e.preventDefault();

//         this.props.removeServerErrors();
//         this.inviteCodeErrorMessage = "";
//         this.inviteCodeErrors = "";


//         if (this.state.invite_code === "") {
//             this.setState({ invalidInviteCode: " - Please enter a valid invite link or invite code." });
//         }
//         else {
//             let invite = this.state.invite_code;

//             if (invite.length < 8) {
//                 this.setState({ invalidInviteCode: " - The invite is invalid or has expired." })
//             }
//             //if valid length start the backend check to see if link/code exists
//             else {
//                 //check to see if invite is either a code or full link
//                 //code is 8 chars long while the link is the code plus https://strife.gg/{code}
//                 if (invite.length === 8) {
//                     let fullInviteLink = "https://strife.gg/" + invite.toString();
//                     this.setState({ invite_code: fullInviteLink });
//                     invite = fullInviteLink;
//                 }

//                 if (invite.length !== 26) {
//                     this.setState({ invalidInviteCode: " - The invite is invalid or has expired." })
//                 }
//                 else {

//                     this.props.joinServer(invite).then((action) => {
//                         let joinedServer = action.server;
//                         this.props.reSyncCurrentUser(this.props.currentUserId).then(() => {
//                             this.props.history.push(`/$/channels/${joinedServer.id}/${joinedServer.general_channel_id}`);
//                             this.closeModalTransitionOut();
//                         })



//                     });


//                 }

//             }


//         }

//     }

//     handleSlideForward (e) {
//         // e.preventDefault();
//         let currentSlide = this.state.form_number;
//         this.setState({
//             form_number: currentSlide + 1,
//             forward: true,
//             joiningServer: false
//         });
//     }

//     handleSlideBackward (e) {
//         // e.preventDefault();
//         let currentSlide = this.state.form_number;
//         this.setState({
//             form_number: currentSlide - 1,
//             forward: false,
//             joiningServer: false
//         })
//     }

//     handleInviteCode (e) {
//         return (e) => this.setState({ invite_code: e.currentTarget.value });
//     }

//     render () {

//         let serverErrorTag = this.props.errors.length > 0 ? "server-error" : "";
//         let form_state = "";
//         this.inviteCodeErrorMessage = "";
//         this.inviteCodeErrors = "";


//         let server_Icon_Upload_Filler = this.state.server_Icon_Url === null ?
//             (<svg
//                 // className={`${this.state.server_Icon_Url === undefined ? `` : `is-hidden`}`}
//                 width="80" height="80" viewBox="0 0 80 80">
//                 <path
//                     fill="#4f5660"
//                     d="M54.8694 2.85498C53.8065 2.4291 52.721 2.04752 51.6153 1.71253L51.3254 2.66957L51.0354 3.62661C51.9783 3.91227 52.9057 4.23362 53.8161 4.58911C54.1311 3.98753 54.4832 3.40847 54.8694 2.85498ZM75.4109 26.1839C76.0125 25.8689 76.5915 25.5168 77.145 25.1306C77.5709 26.1935 77.9525 27.279 78.2875 28.3847L77.3304 28.6746L76.3734 28.9646C76.0877 28.0217 75.7664 27.0943 75.4109 26.1839ZM78.8148 43.8253L79.8102 43.9222C79.9357 42.6318 80 41.3234 80 40C80 38.6766 79.9357 37.3682 79.8102 36.0778L78.8148 36.1747L77.8195 36.2715C77.9389 37.4977 78 38.7414 78 40C78 41.2586 77.9389 42.5023 77.8195 43.7285L78.8148 43.8253ZM43.8253 1.18515L43.9222 0.189853C42.6318 0.0642679 41.3234 0 40 0C38.6766 0 37.3682 0.064268 36.0778 0.189853L36.1747 1.18515L36.2715 2.18045C37.4977 2.06112 38.7414 2 40 2C41.2586 2 42.5023 2.06112 43.7285 2.18045L43.8253 1.18515ZM28.6746 2.66957L28.3847 1.71253C25.8549 2.47897 23.4312 3.48925 21.1408 4.71604L21.6129 5.59756L22.0851 6.47907C24.2606 5.3138 26.5624 4.35439 28.9646 3.62661L28.6746 2.66957ZM15.2587 9.85105L14.6239 9.0784C12.5996 10.7416 10.7416 12.5996 9.0784 14.6239L9.85105 15.2587L10.6237 15.8935C12.2042 13.9699 13.9699 12.2042 15.8935 10.6237L15.2587 9.85105ZM5.59756 21.6129L4.71604 21.1408C3.48925 23.4312 2.47897 25.8549 1.71253 28.3847L2.66957 28.6746L3.62661 28.9646C4.35439 26.5624 5.3138 24.2607 6.47907 22.0851L5.59756 21.6129ZM0 40C0 38.6766 0.0642679 37.3682 0.189853 36.0778L1.18515 36.1747L2.18045 36.2715C2.06112 37.4977 2 38.7414 2 40C2 41.2586 2.06112 42.5023 2.18045 43.7285L1.18515 43.8253L0.189853 43.9222C0.064268 42.6318 0 41.3234 0 40ZM2.66957 51.3254L1.71253 51.6153C2.47897 54.1451 3.48926 56.5688 4.71604 58.8592L5.59756 58.3871L6.47907 57.9149C5.3138 55.7394 4.35439 53.4376 3.62661 51.0354L2.66957 51.3254ZM9.85105 64.7413L9.0784 65.3761C10.7416 67.4004 12.5996 69.2584 14.6239 70.9216L15.2587 70.1489L15.8935 69.3763C13.9699 67.7958 12.2042 66.0301 10.6237 64.1065L9.85105 64.7413ZM21.6129 74.4024L21.1408 75.284C23.4312 76.5107 25.8549 77.521 28.3847 78.2875L28.6746 77.3304L28.9646 76.3734C26.5624 75.6456 24.2607 74.6862 22.0851 73.5209L21.6129 74.4024ZM36.1747 78.8148L36.0778 79.8102C37.3682 79.9357 38.6766 80 40 80C41.3234 80 42.6318 79.9357 43.9222 79.8102L43.8253 78.8148L43.7285 77.8195C42.5023 77.9389 41.2586 78 40 78C38.7414 78 37.4977 77.9389 36.2715 77.8195L36.1747 78.8148ZM51.3254 77.3304L51.6153 78.2875C54.1451 77.521 56.5688 76.5107 58.8592 75.284L58.3871 74.4024L57.9149 73.5209C55.7394 74.6862 53.4376 75.6456 51.0354 76.3734L51.3254 77.3304ZM64.7413 70.1489L65.3761 70.9216C67.4004 69.2584 69.2584 67.4004 70.9216 65.3761L70.1489 64.7413L69.3763 64.1065C67.7958 66.0301 66.0301 67.7958 64.1065 69.3763L64.7413 70.1489ZM74.4024 58.3871L75.284 58.8592C76.5107 56.5688 77.521 54.1451 78.2875 51.6153L77.3304 51.3254L76.3734 51.0354C75.6456 53.4375 74.6862 55.7393 73.5209 57.9149L74.4024 58.3871Z"
//                 ></path>
//                 <circle cx="68" cy="12" r="12" fill="#7289DA"></circle>
//                 <path
//                     fill="#ffffff"
//                     d="M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z"
//                 ></path>
//                 <path
//                     fill="#4f5660"
//                     d="M40 29C37.794 29 36 30.794 36 33C36 35.207 37.794 37 40 37C42.206 37 44 35.207 44 33C44 30.795 42.206 29 40 29Z"
//                 ></path>
//                 <path
//                     fill="#4f5660"
//                     d="M48 26.001H46.07C45.402 26.001 44.777 25.667 44.406 25.111L43.594 23.891C43.223 23.335 42.598 23 41.93 23H38.07C37.402 23 36.777 23.335 36.406 23.89L35.594 25.11C35.223 25.667 34.598 26 33.93 26H32C30.895 26 30 26.896 30 28V39C30 40.104 30.895 41 32 41H48C49.104 41 50 40.104 50 39V28C50 26.897 49.104 26.001 48 26.001ZM40 39C36.691 39 34 36.309 34 33C34 29.692 36.691 27 40 27C43.309 27 46 29.692 46 33C46 36.31 43.309 39 40 39Z"
//                 ></path>
//                 <path
//                     fill="#4f5660"
//                     d="M24.6097 52.712V47.72H22.5457V52.736C22.5457 53.792 22.0777 54.404 21.1417 54.404C20.2177 54.404 19.7377 53.78 19.7377 52.712V47.72H17.6737V52.724C17.6737 55.04 19.0897 56.132 21.1177 56.132C23.1217 56.132 24.6097 55.016 24.6097 52.712ZM26.0314 56H28.0834V53.252H28.6114C30.6154 53.252 31.9474 52.292 31.9474 50.42C31.9474 48.62 30.7114 47.72 28.6954 47.72H26.0314V56ZM29.9554 50.456C29.9554 51.308 29.4514 51.704 28.5394 51.704H28.0594V49.268H28.5754C29.4874 49.268 29.9554 49.664 29.9554 50.456ZM37.8292 56L37.5532 54.224H35.0092V47.72H32.9572V56H37.8292ZM45.9558 51.848C45.9558 49.292 44.4078 47.564 42.0078 47.564C39.6078 47.564 38.0478 49.304 38.0478 51.872C38.0478 54.428 39.6078 56.156 41.9838 56.156C44.3958 56.156 45.9558 54.404 45.9558 51.848ZM43.8918 51.86C43.8918 53.504 43.1958 54.548 41.9958 54.548C40.8078 54.548 40.0998 53.504 40.0998 51.86C40.0998 50.216 40.8078 49.172 41.9958 49.172C43.1958 49.172 43.8918 50.216 43.8918 51.86ZM52.2916 56.084L54.3676 55.748L51.4876 47.684H49.2316L46.2556 56H48.2716L48.8236 54.284H51.6916L52.2916 56.084ZM50.2516 49.796L51.1756 52.676H49.3156L50.2516 49.796ZM62.5174 51.848C62.5174 49.388 61.0174 47.72 58.1374 47.72H55.2814V56H58.1854C60.9814 56 62.5174 54.308 62.5174 51.848ZM60.4534 51.86C60.4534 53.636 59.5414 54.404 58.0774 54.404H57.3334V49.316H58.0774C59.4814 49.316 60.4534 50.12 60.4534 51.86Z"
//                 ></path>
//             </svg>) :
//             (<img className="filled-server-icon-uploaded"
//                 src={this.state.server_Icon_Url} alt="ServerPFP" />);



//         if (this.state.invalidInviteCode === "*") {
//             this.inviteCodeErrorMessage = <span>*</span>;
//         }
//         else {
//             this.inviteCodeErrorMessage = this.state.invalidInviteCode;
//             this.inviteCodeErrors = "ERROR";
//         }

//         if (this.props.errors.length > 0) {

//             this.renderServerInviteErrors();
//         }



//         if (this.state.forward === false) {
//             if (this.state.form_number === 1) {
//                 form_state = "all-Slides back";
//             }
//             else if (this.state.form_number === 2) {
//                 form_state = "all-Slides second back";
//             }
//         }
//         else {

//             if (this.state.form_number === 1) {
//                 form_state = "all-Slides";

//             }
//             if (this.state.form_number === 2) {
//                 form_state = "all-Slides second forward";


//             }
//             else if (this.state.form_number === 3) {
//                 form_state = "all-Slides third forward";
//             }



//         }







//         let slide1 = (

//             <div className="first-Slide">


//                 <div className="x-To-Close1">

//                     <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         onClick={() => this.closeModalTransitionOut()}
//                     ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                     </svg>

//                 </div>


//                 <div className="first-Slide-Header">
//                     <h2>Create a server</h2>
//                     <p>Your server is where you and your friends hang out. Make yours and start talking.</p>
//                 </div>


//                 <div className="sep">


//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={this.handleSlideForward}>

//                         <div>
//                             <img className="create-A-Server-Img" />
//                             <h2>Create My Own</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />


//                     <div className="top-separator" />
//                     <div className="start-from-template">
//                         <h2>Start From A Template</h2>
//                     </div>

//                     <div className="bottom-separator" />

//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={() => { this.handleSlideForward(); this.setState({ serverGenreType: "Gaming" }); }}>

//                         <div>
//                             <img className="gaming-Server-Img" />
//                             <h2>Gaming</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />


//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={() => { this.handleSlideForward(); this.setState({ serverGenreType: "School Club" }); }}>

//                         <div>
//                             <img className="school-Club-Server-Img" />
//                             <h2>School Club</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />



//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={() => { this.handleSlideForward(); this.setState({ serverGenreType: "Study Group" }); }}>

//                         <div>
//                             <img className="study-Server-Img" />
//                             <h2>Study Group</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />

//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={() => { this.handleSlideForward(); this.setState({ serverGenreType: "Friends" }); }}>

//                         <div>
//                             <img className="friends-Server-Img" />
//                             <h2>Friends</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />

//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={() => { this.handleSlideForward(); this.setState({ serverGenreType: "Artists & Creators" }); }}>

//                         <div>
//                             <img className="artists-and-Creators-Server-Img" />
//                             <h2>Artists & Creators</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />



//                     <div className="top-separator" />
//                     <div className="slide1-To-Slide2-Button" onClick={() => { this.handleSlideForward(); this.setState({ serverGenreType: "Local Community" }); }}>

//                         <div>
//                             <img className="local-Community-Server-Img" />
//                             <h2>Local Community</h2>
//                         </div>
//                         <img className="arrow" />
//                     </div>
//                     <div className="bottom-separator" />


//                 </div>


//                 <div className="join-Existing-Server" >
//                     <h2>Have an invite already?</h2>
//                     <button onClick={this.handleJoinServerClick}>Join a Server</button>

//                 </div>


//             </div>



//         );

//         //modal slide for joining a server via invite link
//         //transform: translate3d(0px, -17%, 0px) scale(1, 1);

//         let slide2 = this.state.joiningServer === true ? (
//             <div className="second-Slide joinServer">
//                 <div className="x-To-Close2">

//                     <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         onClick={() => this.closeModalTransitionOut()}
//                     ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                     </svg>

//                 </div>
//                 <div className="second-Slide-Header">
//                     <h2>Join a Server</h2>
//                     <p>Enter an invite below to join an existing server</p>
//                 </div>
//                 <div className="server-use-invite-form">
//                     {/* <label className={inviteCodeErrors}>INVITE LINK {inviteCodeErrorMessage}</label> */}
//                     <label className={this.inviteCodeErrors}>INVITE LINK {this.inviteCodeErrorMessage}</label>

//                     <input type="text" onChange={this.handleInviteCode()} placeholder="https://strife.gg/8404br4s" />
//                     <label>INVITES SHOULD LOOK LIKE</label>
//                     <div className="invite-code-examples">
//                         <h3>8404br4s</h3>
//                         <h3>https://strife.gg/8406eb38</h3>
//                         <h3>https://strife.gg/default-server</h3>
//                     </div>

//                     <Link className="unStyle" to={`/$/channels/guild-discovery/`} onClick={() => this.closeModalTransitionOut()}>
//                         <div className="slide2-to-slide3-button-2">

//                             <div className="img-container">
//                                 <img className="dont-Have-A-Server-Img" />

//                                 <div className="invite-code-examples">
//                                     <h2>Don't have an invite?</h2>
//                                     <div>Check out public communities in Server Discovery.</div>


//                                 </div>
//                             </div>
//                             <img className="arrow" />
//                         </div>
//                     </Link>

//                 </div>
//                 <div className="back-button-join">
//                     <h2 onClick={this.handleSlideBackward}>Back</h2>
//                     <input type="submit" value="Join Server" onClick={this.handleJoinServer} />
//                 </div>

//             </div>
//         ) : (
//             <div className="second-Slide">



//                 <div className="x-To-Close2">

//                     <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         onClick={() => this.closeModalTransitionOut()}
//                     ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                     </svg>

//                 </div>





//                 <div className="second-Slide-Header">
//                     <h2>Tell us more about your server</h2>
//                     <p>In order to help you with your setup, is your
//                         new server for just a few friends or a larger community? </p>
//                 </div>


//                 <div className="slide2-to-slide3-button" onClick={() => { this.handleSlideForward(); this.setState({ serverPrivacy: "public", public: true }); }}>

//                     <div>
//                         <img className="public-Server-Img" />
//                         <h2>For a club or community</h2>
//                     </div>
//                     <img className="arrow" />
//                 </div>

//                 <div className="slide2-to-slide3-button" onClick={() => { this.handleSlideForward(); this.setState({ serverPrivacy: "private", public: false }); }}>

//                     <div>
//                         <img className="private-Server-Img" />
//                         <h2>For me and my friends</h2>
//                     </div>
//                     <img className="arrow" />
//                 </div>

//                 <div className="skip-this-step">
//                     <h2>
//                         Not sure? You can{" "}
//                         <a onClick={() => { this.handleSlideForward(); this.setState({ serverPrivacy: "public", public: true }); }}>skip this question </a>
//                         for now
//                     </h2>
//                 </div>


//                 <div className="back-button">
//                     <h2 onClick={this.handleSlideBackward}>Back</h2>
//                 </div>


//             </div>
//         );




//         let slide3 = (
//             <div className="third-Slide">


//                 <div className="x-To-Close2">

//                     <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         onClick={() => this.closeModalTransitionOut()}
//                     ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                     </svg>

//                 </div>



//                 <div className="third-Slide-Header">
//                     <h2>Customize your server</h2>
//                     <p>Give your new server a personality with a
//                         name and an icon. You can always change it later.</p>
//                 </div>
//                 <form>

//                     <div className="input-server-icon-super-wrapper">
//                         <div className="input-server-icon-wrapper">
//                             {server_Icon_Upload_Filler}
//                             <input accept=".jpg, .jpeg, .png, .gif" type="file" onChange={(e) => this.handleFileProcessing(e)} />
//                             {/* svg images are rendered in binary from active storage displaying a download link instead so users cant upload svgs   */}
//                             {/* <input accept=".jpg, .jpeg, .svg, .png, .gif" type="file" onChange={(e) => this.handleFileProcessing(e)} /> */}
//                         </div>
//                     </div>

//                     <div className="server-name-input">
//                         <label className={serverErrorTag}>SERVER NAME{this.renderServerErrors()}</label>

//                         <input id="servernameInput" type="text" onKeyUp={this.submissionBlocker} onChange={this.handleInput()} value={this.state.server_name} placeholder={`${this.props.currentUser.username}'s server`} />
//                         <h3>
//                             By creating a server, you agree to $TR!F3's{" "}
//                             <strong><a href="https://discord.com/guidelines" target="_blank">Community Guidelines</a></strong>
//                         </h3>
//                     </div>
//                     <div className="back-create-server-button">
//                         <h2 onClick={this.handleSlideBackward}>Back</h2>
//                         <input id="serverCreateButton" type="submit" value="Create" onClick={this.handleSubmit} />
//                     </div>
//                 </form>
//             </div>
//         );








//         return (
//             <div className="create-A-Server-Wrapper" onClick={e => e.stopPropagation()}>

//                 <div id="create-A-Server-Modal" className="create-A-Server-Modal">
//                     {/* <div className="x-To-Close">

//                         <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             onClick={() => this.props.closeModal()}
//                         ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                         </svg>

//                     </div> */}
//                     <div className={form_state}>

//                         {slide1}
//                         {slide2}
//                         {slide3}

//                     </div>




//                 </div>





//             </div>
//         )
//     }
// }

// export default CreateServerForm;

//new unused comps

// let slide1 = currentForm === 1 ? (
//     <div className="create-server-slide-1">
//         <div className="create-server-slide-inner">

//             <div className='create-server-header-wrap'>
//                 <h1 className='create-server-header'>Create a Server</h1>
//                 <div className='create-server-header-subtext'>
//                     Your server is where you and your friends hang out.
//                     Make yours and start talking.
//                 </div>
//                 <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
//                     <div className="global-button-contents">
//                         <svg aria-hidden="true" role="img" className="svg-x-closeIcon" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
//                     </div>
//                 </button>

//             </div>
//             <div className='create-server-template-button-list global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll` }}>
//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                     }}
//                 >
//                     <img className="create-a-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>Create My Own</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>

//                 <div className='create-server-template-text-header'>Start from a template</div>

//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerGenre("Gaming");
//                     }}
//                 >
//                     <img className="gaming-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>Gaming</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>
//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerGenre("School Club");

//                     }}
//                 >
//                     <img className="school-Club-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>School Club</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>
//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerGenre("Study Group");

//                     }}
//                 >
//                     <img className="study-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>Study Group</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>
//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerGenre("Friends");

//                     }}
//                 >
//                     <img className="friends-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>Friends</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>
//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerGenre("Artists & Creators");
//                     }}
//                 >
//                     <img className="artists-and-Creators-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>Artists & Creators</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>
//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerGenre("Local Community");
//                     }}
//                 >
//                     <img className="local-Community-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>Local Community</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>
//                 <div className='create-server-template-list-sep'></div>
//             </div>
//             <div className='create-server-footer-button-container'>
//                 <h2 className='create-server-footer-header'>
//                     Have an invite already?
//                 </h2>
//                 <button className='create-server-footer-join-a-server-button' type="button" onClick={(e) => { handleJoinServerClick(e) }}>
//                     <div className='create-server-footer-join-a-server-button-contents'>Join a Server </div>
//                 </button>
//             </div>
//         </div>
//     </div>
// ) : ("");


// let joinSlide = joiningServer === true && currentForm === 2 ? (
//     <div className='create-server-slide-joining-server'>

//         <div className="create-server-slide-inner">

//             <div>
//                 <div className='create-server-header-wrap-3'>
//                     <h1 className='csm-join-server-header'>Join a Server</h1>
//                     <div className='csm-join-server-header-subtext'>
//                         Enter an invite below to join an existing server
//                     </div>
//                     <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
//                         <div className="global-button-contents">
//                             <svg aria-hidden="true" role="img" className="svg-x-closeIcon" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
//                         </div>
//                     </button>
//                 </div>
//                 <div className='create-server-template-button-list-3 global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                     <form className='join-server-input-form'>
//                         <div>
//                             <h2 className='join-server-input-form-header'>
//                                 Invite link
//                                 <span className={inviteCodeErrors}>{invalidInviteCode}</span>
//                             </h2>
//                             <div className='join-server-input-wrapper'>
//                                 <input
//                                     className='join-server-input'
//                                     spellCheck={false} placeholder="https://strife.gg/8404br4s"
//                                     value={inviteCode} onChange={(e) => setInviteCode(e.currentTarget.value)}
//                                     type="text" maxLength={999} required />
//                             </div>
//                         </div>
//                     </form>
//                     <div className='join-server-invite-links-example'>
//                         <h2 className='join-server-invite-link-example-header'>Invites should look like</h2>
//                         <div className='join-server-invite-link-sample'>8404br4s</div>
//                         <div className='join-server-invite-link-sample'>https://strife.gg/8406eb38</div>
//                         <div className='join-server-invite-link-sample'>https://strife.gg/default-server</div>

//                     </div>
//                     <div className='join-server-invite-row-container' role={'button'} onClick={(e) => { props.history.push(`/$/channels/guild-discovery/`); handleCloseOnOutSideClick(e) }}>
//                         <img className="dont-Have-A-Server-Img" alt=" " />
//                         <div>
//                             <h2 className='dont-have-a-server-header'>
//                                 Don't have an invite?
//                             </h2>
//                             <div className='dont-have-a-server-text'>Check out Discoverable communities in Server Discovery.</div>
//                         </div>
//                         <img className="create-server-modal-arrow" alt=" " />
//                     </div>
//                     <div className='create-server-sep'></div>
//                 </div>
//                 <div className='create-server-footer-button-container-3'>
//                     <button className='join-server-join-button' type='button' onClick={(e) => handleJoinServer(e)}>
//                         <div className='global-button-contents look-filled-button-contents'>Join Server</div>
//                     </button>
//                     <button className='join-server-back-button' type='button' onClick={(e) => handleSlideBackward(e)}>
//                         <div className='global-button-contents look-filled-button-contents'>Back</div>
//                     </button>
//                 </div>
//             </div>
//         </div>

//     </div>
// ) : ("");


// let slide2 = currentForm === 2 && joiningServer === false ? (
//     <div className="create-server-slide-2">
//         <div className="create-server-slide-inner">

//             <div className='create-server-header-wrap'>
//                 <h1 className='create-server-header'>Tell us more about your server</h1>
//                 <div className='create-server-header-subtext'>
//                     In order to help you with your setup, is your new server for just a few friends or a larger community?
//                 </div>
//                 <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
//                     <div className="global-button-contents">
//                         <svg aria-hidden="true" role="img" className="svg-x-closeIcon" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
//                     </div>
//                 </button>
//             </div >
//             <div className='create-server-template-button-list-2 global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>

//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerPrivacy('private');
//                         setPublicServer(false)
//                     }}>
//                     <img className="private-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>For me and my friends</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>

//                 <button className='create-server-template-button' type="button"
//                     onClick={(e) => {
//                         handleSlideForward(e);
//                         setServerPrivacy('public');
//                         setPublicServer(true)
//                     }}>
//                     <img className="public-Server-Img" alt=" " />
//                     <div className='create-server-template-button-text'>For a club or community</div>
//                     <img className="create-server-modal-arrow" alt=" " />
//                 </button>

//                 <div className='skip-section'>
//                     Not sure? You can {` `}
//                     <a className='skip-anchor'
//                         onClick={(e) => {
//                             handleSlideForward(e);
//                             setPublicServer(true);
//                             setServerPrivacy('public');
//                         }}>skip this question</a>
//                     {` `}for now.
//                 </div>
//                 <div className='create-server-template-list-sep-2'></div>
//             </div>
//             <div className='create-server-footer-button-container-2'>
//                 <button className='create-server-footer-back-button' type="button" onClick={(e) => handleSlideBackward(e)}>
//                     <div className='global-button-contents'>Back</div>
//                 </button>
//             </div>
//         </div>
//     </div >
// ) : ("")


// let slide3 = currentForm === 3 ? (
//     <div className='create-server-slide-3' style={{ height: `${props.errors.length > 0 ? `428px` : `404px`}` }}>
//         <div className="create-server-slide-inner">
//             <div className='create-server-header-wrapper'>
//                 <h1 className='create-server-header'>Customize your server</h1>
//                 <div className='create-server-header-subtext'>
//                     Give your new server a personality with a name and an icon. You can always change it later.
//                 </div>
//                 <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
//                     <div className="global-button-contents">
//                         <svg aria-hidden="true" role="img" className="svg-x-closeIcon" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
//                     </div>
//                 </button>
//             </div>
//             <div className='create-server-template-button-list-3 create-server-guild global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>

//                 <div className='create-server-upload-server-icon-wrapper'>
//                     <div className='create-server-upload-server-icon-container'>
//                         {server_Icon_Upload_Filler}
//                         <input className="create-server-icon-image-input" type="file" accept=".jpg, .jpeg, .png, .gif" onChange={(e) => handleFileProcessing(e)} />
//                     </div>
//                 </div>
//                 <form onSubmit={handleSubmit}>

//                     <div className='create-server-name-input-section'>
//                         {ifServerError}
//                         <label className='create-server-name-input-label' htmlFor="servernameInput">Server Name</label>
//                         <div className='create-server-name-input-wrapper'>
//                             <input id="servernameInput" className="create-server-name-input" type="text" spellCheck={false}
//                                 maxLength={100} value={serverName} onKeyUp={(e) => submissionBlocker(e)}
//                                 placeholder={`${props.currentUser.username}'s server`}
//                                 onChange={(e) => setServerName(e.currentTarget.value)}
//                             />
//                         </div>
//                     </div>
//                     <div className='create-server-name-input-subtext'>
//                         By creating a server, you agree to $TR!F3's{" "}
//                         <strong><a href="https://discord.com/guidelines" target="_blank" rel="noreferrer noopener">Community Guidelines</a></strong>
//                         .
//                     </div>
//                 </form>
//                 <div className='create-server-sep'></div>
//             </div>

//             <div className='create-server-footer-button-container-3'>
//                 <button className='create-server-button' type='submit'>
//                     <div className='global-button-contents look-filled-button-contents'>Create</div>
//                 </button>
//                 <button className='create-server-slide-3-back-button' type='button' onClick={(e) => handleSlideBackward(e)}>
//                     <div className='global-button-contents'>Back</div>
//                 </button>
//             </div>
//         </div>

//     </div>
// ) : ("");




//normal old style to make
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let serverSubmission = {};
    //     const createServerFormData = new FormData();

    //     //if server genre is of local type 
    //     let serverChannelSetup = {};
    //     switch (serverTemplate) {

    //         case 'Local Community':
    //             serverChannelSetup = {
    //                 channelInfoNames: ['welcome-and-rules', "announcements", 'resources'],
    //                 channelTextNames: ["meeting-plans", 'off-topic'],
    //                 channelVoiceNames: ['Lounge', "Meeting Room"],

    //             };
    //             break;
    //         case 'Artists & Creators':
    //             serverChannelSetup = {
    //                 channelInfoNames: ['welcome-and-rules', "announcements"],
    //                 channelTextNames: ["events", 'ideas-and-feedback'],
    //                 channelVoiceNames: ['Lounge', 'Community Hangout', "Stream Room"],

    //             };
    //             break;

    //         case 'Friends':
    //             serverChannelSetup = {
    //                 channelInfoNames: [],
    //                 channelTextNames: ["games", 'music'],
    //                 channelVoiceNames: ['Lounge', "Stream Room"],

    //             };
    //             break;

    //         case 'Study Group':
    //             serverChannelSetup = {
    //                 channelInfoNames: ['welcome-and-rules', 'notes-resources'],
    //                 channelTextNames: ["homework-help", 'session-planning', 'off-topic'],
    //                 channelVoiceNames: ['Lounge', "Study Room 1", "Study Room 2"],

    //             };
    //             break;

    //         case 'School Club':
    //             serverChannelSetup = {
    //                 channelInfoNames: ['welcome-and-rules', "announcements", 'resources'],
    //                 channelTextNames: ["meeting-plans", 'off-topic'],
    //                 channelVoiceNames: ['Lounge', "Meeting Room 1", "Meeting Room 2"],

    //             };
    //             break;

    //         case 'Gaming':
    //             serverChannelSetup = {
    //                 channelInfoNames: [],
    //                 channelTextNames: ["clips-and-highlights"],
    //                 channelVoiceNames: ['Lobby', "Gaming"],

    //             };
    //             break;

    //         default:
    //             serverChannelSetup = {
    //                 channelInfoNames: [],
    //                 channelTextNames: [],
    //                 channelVoiceNames: ['General'],

    //             };
    //             break;

    //     }

    //     if (serverPrivacy === "public") {
    //         setPublicServer(true);

    //         serverSubmission = {
    //             server_owner_id: props.currentUser.id,
    //             server_name: serverName,
    //             public: publicServer, //true by default

    //         }

    //         createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
    //         createServerFormData.append(`server[server_name]`, serverName);
    //         createServerFormData.append(`server[public]`, publicServer);
    //         // createServerFormData.append(`server[serverTemplate]`, serverTemplate);

    //         if (server_Icon) {
    //             createServerFormData.append(`server[server_Icon]`, server_Icon);
    //         }
    //     }
    //     else if (serverPrivacy === "private") {

    //         setPublicServer(false);
    //         serverSubmission = {
    //             server_owner_id: props.currentUser.id,
    //             server_name: serverName,
    //             public: publicServer, //true by default

    //         }
    //         createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
    //         createServerFormData.append(`server[server_name]`, serverName);
    //         createServerFormData.append(`server[public]`, publicServer);
    //         // createServerFormData.append(`server[serverTemplate]`, serverTemplate);

    //         if (server_Icon) {
    //             createServerFormData.append(`server[server_Icon]`, server_Icon);
    //         }

    //     }


    //     let newServer;
    //     let channel_type;
    //     //create the new server then if the server is using one of the performed templates 
    //     //create the channels to set up the server 
    //     // this.props.action(serverSubmission).then((action) => {
    //     props.createServer(createServerFormData).then((action) => {
    //         newServer = action.server;
    //         // newServer = action.server.server;
    //         //
    //         for (let i in serverChannelSetup) {
    //             //if template for server has no channels in the in any of the 3 catergories skip it  
    //             if (serverChannelSetup[i].length === 0) {
    //                 continue;
    //             }
    //             else {

    //                 if (i === 'channelInfoNames' || i === 'channelTextNames') {
    //                     channel_type = 1;
    //                 }
    //                 else if (i === 'channelVoiceNames') {
    //                     channel_type = 2;

    //                 }

    //                 for (let e of serverChannelSetup[i]) {
    //                     let channelHash = new Object();
    //                     channelHash = {
    //                         server_id: newServer.id,
    //                         channel_name: e,
    //                         channel_type: channel_type
    //                     }

    //                     props.createChannelSetup(channelHash);

    //                 }

    //             }
    //         }



    //     })
    //     // .then(() => {
    //     //     setTimeout(() => {
    //     //         handleCloseOnOutSideClick(e);
    //     //     }, 300);
    //     // }).then(() => {
    //     //     props.reSyncCurrentUser(props.currentUserId).then(() => {
    //     //         props.history.push(`/$/channels/${newServer.id}/${newServer.general_channel_id}`);
    //     //     })
    //     // })

    // }




//through channel injextion    method
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const createServerFormData = new FormData();

    //     //if server genre is of local type 
    
    //     if (serverPrivacy === "public") {
    //         setPublicServer(true);

    //         createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
    //         createServerFormData.append(`server[server_name]`, serverName);
    //         createServerFormData.append(`server[public]`, publicServer);
    //         // createServerFormData.append(`server[serverTemplate]`, serverTemplate);
    //         if (server_Icon) {
    //             createServerFormData.append(`server[server_Icon]`, server_Icon);
    //         }
    //     }
    //     else if (serverPrivacy === "private") {

    //         setPublicServer(false);
        
    //         createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
    //         createServerFormData.append(`server[server_name]`, serverName);
    //         createServerFormData.append(`server[public]`, publicServer);
    //         // createServerFormData.append(`server[serverTemplate]`, serverTemplate);

    //         if (server_Icon) {
    //             createServerFormData.append(`server[server_Icon]`, server_Icon);
    //         }

    //     }


    //     let newServer;

    //     props.createServer(createServerFormData).then((action) => {
    //         newServer = action.server;
    //         let channelInjextion = {
    //             server_id: newServer.id,
    //             serverTemplate: serverTemplate
    //         };
    //         props.createChannelsViaServerTemplate(channelInjextion);
    //     })

    // }
