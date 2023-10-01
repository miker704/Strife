// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { Route, Redirect } from "react-router";

// const mSTP = (state, ownProps) => {
//     const paramsExclusion = ['guild-discovery', 'nitro', '@me']

//     return {
//         currentUser: state.currentUser,
//         loggedIn: Boolean(state.session.id),
//         isMember: paramsExclusion.includes(ownProps.match.params.serverId) ? true : state.currentUser.serversJoined.includes(parseInt(ownProps.match.params.serverId))
//     }
// }

// const PROTECTED_SERVER = ({ isMember, loggedIn, path, exact, component: Component, currentUser, }) => {

//     const serverParams = useParams();
//     const paramsExclusion = ['guild-server', 'nitro', '@me']
//     const [isMemberofServer, setIsMemberofServer] = useState(isMember)

//     useEffect(() => {
//         console.log("hi there checking if the user is a member")
//         if (paramsExclusion.includes(serverParams.serverId)) {
//             console.log(`hi member is at ${serverParams.serverId}`)
//             setIsMemberofServer(true);
//         }
//         else if (currentUser.serversJoined.includes(parseInt(serverParams.serverId))) {
//             console.log(`hi member is at ${serverParams.serverId}`)
//             setIsMemberofServer(true);
//         }
//         else if(serverParams.serverId === undefined){
//             console.log(`hi member is at ${serverParams.serverId}`)
//             setIsMemberofServer(true);
//         }
//         else {
//             console.log(`hi member is at ${serverParams.serverId}`)
//             console.log(`INTRUDERS !`)
//             setIsMemberofServer(false);
//         }
//     }, [currentUser]);

//     if (isMemberofServer === false || isMemberofServer === undefined || isMemberofServer === null) { console.warn('UNAUTHORIZED ACCESS ERROR : 401 -> REDIRECTING ...'); /*return null;*/ }
//     return (
//         <Route
//             path={path}
//             exact={exact}
//             render={props => (
//                 !loggedIn ? <Redirect to={`/login`} /> : isMemberofServer ? <Component {...props} /> : <Redirect to={'/$/$TR!F3-INTRUSION-PREVENTION/'} /> 
//             )} />
//     )
// }

// const PROTECTED_SERVER_ROUTER = withRouter(connect(mSTP)(PROTECTED_SERVER));
// export default PROTECTED_SERVER_ROUTER; 