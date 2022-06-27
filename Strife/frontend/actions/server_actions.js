import * as ServerAPI from "../utils/server_api_util.js"


export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS";


export const receiveServer = (server) => {
    return{
            type: RECEIVE_SERVER,
            server
    }
}

export const receiveServers = (servers) => {
    return{
            type: RECEIVE_SERVERS,
            servers
    }
}

export const removeServer = (serverId) => {
    return{
            type: REMOVE_SERVER,
            serverId
}
}

export const receiveServerErrors = (errors) => {
    return{
        type: RECEIVE_SERVER_ERRORS,
        errors
    }}


export const removeServerErrors = () => {
    return{
        type: REMOVE_SERVER_ERRORS,
   
    }
}

export const fetchServers = (user) => (dispatch) =>
ServerAPI.fetchServers(user).then((servers) => {dispatch(receiveServers(servers))},(err)=>{dispatch(receiveServerErrors(err.responseJSON))}) 

export const fetchServer = (serverId) => (dispatch) =>
ServerAPI.fetchServer(serverId).then((server) => {dispatch(receiveServers(server))})



