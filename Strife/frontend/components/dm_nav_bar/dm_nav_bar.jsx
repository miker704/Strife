import React from 'react';
import {Link} from 'react-router-dom';
// import UserSearchContainer from "../../components/user_search/user_search_container.jsx"


class DmNavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: false
    }

    this.toggleSearch = this.toggleSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this)
  }

  componentDidMount(){
    this.props.fetchUserDmServers(this.props.currentUser.id);
  }

  toggleSearch(){
    this.setState({search : true})
  }

  closeSearch(){
    this.setState({search: false})
  }

  renderSearch(){
    if (this.state.search){
      return(
      <div> 
        <div id="edit-modal-container" onClick = {() => this.closeSearch()}> 
          <UserSearchContainer/>
          <button id="user-search-exit-x" onClick={() => this.closeSearch()}>
            <i className="fa-solid fa-xmark"/>
          </button>
        </div>
      </div>
      )
    }
  }

  render(){
    console.log("dmserver props: ", this.props);
    console.log("dmusers", this.props.dmUsers);

    return(
      <div className='dm-server-nav-bar'>
        <div className="fake-nav-bar"/> 
        <div className="split-line"/> 
        <br/> 
        <div className="list-header">
          <h4>DIRECT MESSAGES</h4>
          <div className="create-channel-div" onClick={() => this.toggleSearch()}> 
            <i className="fa-solid fa-plus"/> 
              <div className="create-tool-tip"> 
                <span>Create DM</span>
            </div>
          </div>
        </div>
        {/* {this.renderSearch()} */}
        <ul id="dm-nav-list"> 
          {this.props.dmUsers.map((member) => {
          let selectedDm = this.props.otherUserId === member.id.toString()
            ? "selected-dm" : " ";
          if (member.id !== this.props.currentUser.id)
          return(
            <Link
            key={member.id}
            to={`/servers/@me/${member.id}/${member.dmMemberid}`}
            > 
              <li className={`dm-member-item ${selectedDm}`}>
                <div className={`user-icon color-${member.colorId}`}>
                  <i className="fa-brands fa-discord"/>
                </div>
                <h5 className='member-username'> {member.username} </h5>
              </li>
            </Link>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}

export default DmNavBar;
