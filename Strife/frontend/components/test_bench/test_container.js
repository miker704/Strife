import { connect } from "react-redux";
import { withRouter } from "react-router";
import TestPage from "./test_page";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchServer, fetchServers } from "../../actions/server_actions";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchDmServers } from "../../actions/dm_server_actions";
import { fetchDmMemberShipStatus } from "../../actions/dm_member_actions";
const checkIfDmMember = (state, ownProps) => {

    const holdDmServers = Object.values(state.entities.dmServers);
    const currentUser = state.entities.users[state.session.id]

    // const dmServer


    console.log("holddmserver", holdDmServers);
    console.log("curruser: ", currentUser);
    console.log("state session: ", state.session);
    console.log("session id: ", state.session.id);


    for (let i of holdDmServers) {
         Object.values(i.members).find(member => member.id === state.session.id) === undefined ? 
         console.log(`not a member of`, i): console.log(`is a member of`, i);
    }
        // const currentDmServer = state.entities.dmServers[ownProps.match.params.dmServerId];
        // console.log("currentdmServer is : ", currentDmServer);
        // const dmMembers =  selectDmMembers(state,ownProps.match.params.dmServerId);
        // console.log("satet session : ", state.session.id)
        // console.log("dmembers: ",dmMembers);
        // console.log("dmembersarr: ",Object.values(dmMembers))
    
        // const checkMembership = Object.values(dmMembers).find(dmMember => dmMember.id === state.session.id);
        // console.log("membership ? : ",checkMembership);
        // console.log("includes ? ", Object.values(dmMembers).includes(state.session.id));
        // console.log("indexof ? ", Object.values(dmMembers).indexOf(state.session.id));
    

}



const mSTP = (state, ownProps) => {

    // checkIfDmMember(state, ownProps);

    return {
        currentUser: state.entities.users[state.session.id],
        serversArray: Object.values(state.entities.servers),
        servers: state.entities.servers,
        serverId: ownProps.match.params.serverId,
        errors: state.errors.session,
        server: state.entities.servers[1],
        channels: Object.values(state.entities.channels),
        dmServers: state.entities.dmServers,
        dmServersArray: Object.values(state.entities.dmServers),
        isMember: state.entities.users[state.session.id].dmServersJoined,
        selectedLoadingMsg: "$TR!F3 Intrusion Prevention - Warning You are Not Authorized to access this Server!",

    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        fetchServers: () => dispatch(fetchServers()),
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        fetchDmServers: () => dispatch(fetchDmServers()),
        closeModal: () => dispatch(closeModal()),
        fetchDmMemberShipStatus: (dm_member) => dispatch(fetchDmMemberShipStatus(dm_member))

    }
}


const TestPageContainer = withRouter(connect(mSTP, mDTP)(TestPage));
export default TestPageContainer;