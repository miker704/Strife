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
    console.log("dmServers: ", this.props.dmServers);

    return(
      <div className='dm-server-nav-bar'>
        <div className="fake-nav-bar"/> 
        <div className="split-line"/> 
        <br/> 
        <div className="dm-list-header">
          <h4>DIRECT MESSAGES</h4>
          <div className="create-channel-div" onClick={() => this.toggleSearch()}> 
            <i className="fa-solid fa-plus" onClick={() => this.props.openModal("userSearch")}/> 
              <div className="dm-tool-tip"> 
                <span>Create DM</span>
            </div>
          </div>
        </div>
        {/* {this.renderSearch()} */}
        <ul className="dm-nav-bar-list"> 
          {this.props.dmUsers.map((member) => {
          let selectedDm = this.props.otherUserId === member.id.toString()
            ? "selected-dm" : " ";
          if (member.id !== this.props.currentUser.id)
          return(
            <Link
            key={member.id}
            to={`/channels/@me/${member.id}/${member.dmMemberid}`}
            > 
              <li className={`dm-member-li-item ${selectedDm}`}>
                <div className={`user-icon color-${member.color_tag}`}>
                  <i className="fa-brands fa-discord"/>
                </div>
                <h5 className='dm-member-username'> {member.username} </h5>
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
