//deprecated use as reference only
// import React from "react"

// class UserSearch extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       users: [],
//     }
//   }

//   componentDidMount(){
//     let that = this;
//     // Grab all the users that belong to a server that the user belongs to 
//     this.props.fetchUsers().then(
//       function(response){
//         let users = Object.values(response)
//         that.setState({users})
//       }
//     )
//   }

//   handleDmCreation(userId){
//     let that = this;
//     this.props.createDmServer().then(
//       function(response){
//         let dmServerId = response.dmServer.id
//         that.props.createDmMembership({dm_server_id: dmServerId, member_id: userId})
//         that.props.createDmMembership({dm_server_id: dmServerId, member_id: that.props.currentUser.id})
//         that.props.history.push(`/$/channels/@me/${userId}/${dmServerId}`)
//       }
//     )
//   }

//   // Display message if there are no users that someone can search for
//   renderDmMessage(){
//     if (this.state?.users?.length === 0) {
//       return (
//         <li className="user-list-item"> You currently have no one to add to your DM's. 
//           Join a public server (through the compass button on the left-hand nav) 
//           to find friends!
//         </li>
//       )
//     }
//     return null;
//   }

//   render(){
//     return(
//       <div id= "user-search">
//         <h5 id="user-search-header"> Select a User and Start a DM With Them!</h5>
//         <ul id="user-search-list"> 
//           {this.renderDmMessage()}
//           {this.state.users.map((user) => {
//             return( <li 
//               key = {user.id}
//               className="user-list-item"
//               >
//                 <div className="user-info"> 
//                   <div className={`user-icon color-${user.colorId}`}>
//                     <i className="fa-brands fa-discord"/>
//                   </div>
//                   <h5 className='dm-search-username'> {user.username} </h5>
//                   <p className='user-name-with-tag'>{user.username}#{user.numberTag}</p>
//                 </div>
//                 <button className= "createDm" onClick={() => this.handleDmCreation(user.id)}> 
//                   Create Dm </button>
//             </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }


// export default UserSearch;