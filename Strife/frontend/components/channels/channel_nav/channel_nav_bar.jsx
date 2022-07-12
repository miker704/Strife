import React from "react";
import EditServerFormContainer from "../../server/server_form/edit_server_form_container.js";
import CreateChannelFormContainer from "../channel_forms/create_channel_form_container.js";
import EditChannelFormContainer from "../channel_forms/edit_channel_form_container.js";
import { Link } from "react-router-dom";

class ChannelNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noShow: true,
            channelCreate: false,
            channelEdit: false,
            channelId: null,
        }
        this.toggleEdits = this.toggleEdits.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleServerEdit = this.handleServerEdit.bind(this);
        this.mounted = false;
    }



    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }



    toggleEdits(type){
        let that = this;
        return function(e){
          e.preventDefault();
          that.setState({[type]: !that.state[type]});
        }
      }
    
      closeForm(type){
        if(this.mounted){
          let that = this;
          this.setState({[type]: !that.state[type]})
        }
      }
    
      handleSubmit(type){
        // setTimeout Mimics a promise across divs/components
        let that = this;
        setTimeout(() => {if(this.props.errors.length === 0) {that.closeForm(type)}}, 200)
      }
    
      handleServerEdit(){
        // setTimeout Mimics a promise across divs/components
        let that = this;
        setTimeout(() => {if(this.props.serverErrors.length === 0) {that.closeForm("noShow")}}, 200)
      }
    
      // Render Server Edits
      renderServerEdits(){
        if(!this.state.noShow && this.props.currentUserId === this.props.server.ownerId){
          return (
            <div>
                <div onSubmit={() => this.handleServerEdit("noShow")}> 
                  <div id="edit-modal-container" onClick={() => this.closeForm("noShow")}/> 
                  <EditServerFormContainer noShow = {this.state.noShow} type = "owner"/>
                </div>
            </div>)
        } else if (this.state.noShow){
          return null;
        } else {
          return (
          <div> 
                <div id="edit-modal-container" onClick={() => this.closeForm("noShow")}> </div>
              <EditServerFormContainer noShow = {this.state.noShow} type = "member"/>
          </div>
          )
        }
      }
      // Render Channel button
      renderChannelCreateButton(){
        if(this.props.server && this.props.currentUserId === this.props.server.ownerId){
          return(
          <div className="create-channel-div" onClick={this.toggleEdits("channelCreate")}> 
            <i className="fa-solid fa-plus"/> 
              <div className="create-tool-tip"> 
                <span> Create Channel</span>
              </div>
          </div>
            )
        } else {
          return(
            null
          )
        }
      };




      renderChannelCreateForm(){
        if(this.state.channelCreate){
          return (
          <div>
            <div id="double-channel-modal-container" onSubmit = {() => this.handleSubmit("channelCreate")}> 
              <div className="channel-edit-modal" onClick={() => this.closeForm("channelCreate")}></div> 
              <CreateChannelFormContainer
              channelName = {""} 
              serverId = {this.props.server.id}
              server_name = {this.props.server.server_name}/>
              <button id="channel-exit-x" onClick={() => this.closeForm("channelCreate")}><i className="fa-solid fa-xmark"/></button>
            </div>
          </div>)
        }
        else {
          return null;
        }
      }
    
      // Set Channel Id
      setChannelId(channelId, channelName){
        this.setState({["channelId"]: channelId})
        this.setState({["channelName"]: channelName})
      }
    
      // Render Channel Edit Button
    
      renderChannelEditButton(){
          if(this.props.server && this.props.currentUserId === this.props.server.ownerId){
            return(
            <div className="create-channel-div" onClick ={this.toggleEdits("channelEdit")}> 
              <i className="fa-solid fa-gear fa-2xs"/>
                <div className="create-tool-tip edit-translate"> 
                  <span> Edit Channel</span>
                </div>
            </div> 
            )
        } else {
          return(null)
        }
      }
    
      renderChannelEditForm(){
        if(this.state.channelEdit){
          return (
          <div>
            <div id="double-channel-modal-container" onSubmit = {() => this.handleSubmit("channelEdit")}> 
              <div className="channel-edit-modal" onClick={() => this.closeForm("channelEdit")}> </div> 
                <EditChannelFormContainer 
                channelId = {this.state.channelId}
                channelName = {this.state.channelName}
                serverId = {this.props.server.id}
                serverName = {this.props.server.name}
                firstChannelId= {this.props.server.firstChannelId}
                currentChannelId = {this.props.currentChannelId}
                />
              <button id="channel-exit-x" onClick={() => this.closeForm("channelEdit")}><i className="fa-solid fa-xmark"/></button>
            </div>
          </div>
          )
    
        }
        else { return null}
      }









    render() {
        if (this.props.server) {
    return (
      <div id="channel-nav"> 
      <div id="channel-line-across-top"/> 
        <div id="channel-nav-server-name">
          <h5>{this.props.server.server_name}</h5> 
          <i className="fa-solid fa-chevron-down"
          onClick={this.toggleEdits("noShow")}
          />
        </div>
        {this.renderServerEdits()}
        <br/> 
        <div className="list-header"> 
          <h4>CHANNELS</h4>
          {this.renderChannelCreateButton()}
        </div>
        <ul id="channel-nav-list"> 
          {this.props.channels.map((channel) => {
          // Fail Safe for rouge channels running around
          let selectedChannel = this.props.currentChannelId === channel.id.toString()
            ? "selected-channel" : " "
          if (channel.server_id === this.props.server.id) {
          return (
          <Link 
              to={`/channels/${this.props.server.id}/${channel.id}`} 
              onClick={() => this.props.fetchChannel(channel.id)}
              className="channel-nav-link"
              key = {channel.id}
          >
            <li 
              onClick={ () => this.setChannelId(channel.id, channel.name)}
              className={`channel-nav-item ${selectedChannel}`}>
              <div>
                <i className="fa-solid fa-hashtag fa-sm"/>
                {channel.name}
              </div>
            {this.renderChannelEditButton()}
            {/* Have to Render Channel Edit Form here so that you have access to ChannelId */}
            </li>
          </Link>
          )
        }
        })}
        </ul>
        {/* Can Render Create Channel Form out here as you do not need any channel params */}
        {this.renderChannelCreateForm()}
        {this.renderChannelEditForm()}
      </div>
      )
    } else {
      return null;
    }
    }


}

export default ChannelNavBar;