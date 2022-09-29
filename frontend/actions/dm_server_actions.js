import * as DM_SERVER_API_UTIL from '../utils/dm_server_api_util.js';


export const RECEIVE_DM_SERVER = "RECEIVE_DM_SERVER";
export const RECEIVE_DM_SERVERS = "RECEIVE_DM_SERVERS";
export const REMOVE_DM_SERVER = "REMOVE_DM_SERVER";
export const RECEIVE_DM_SERVER_ERRORS = "RECEIVE_DM_SERVER_ERRORS";
export const REMOVE_DM_SERVER_ERRORS = "REMOVE_DM_SERVER_ERRORS";


export const receiveDmServer = (dmserver) => {
    return {
        type: RECEIVE_DM_SERVER,
        dmserver
    }
}

export const receiveDmServers = (dmservers) => {
    return {
        type: RECEIVE_DM_SERVERS,
        dmservers
    }
}

export const removeDmServer = (dmserverId) => {
    return {
        type: REMOVE_DM_SERVER,
        dmserverId
    }
}

export const receiveDmServerErrors = (errors) => {
    return {
        type: RECEIVE_DM_SERVER_ERRORS,
        errors
    }
}


export const removeDmServerErrors = () => {
    return {
        type: REMOVE_DM_SERVER_ERRORS,

    }
}





export const fetchDmServers = (user) => (dispatch) =>
    DM_SERVER_API_UTIL.fetchDmServers(user).then((dmservers) => { dispatch(receiveDmServers(dmservers)) }, (err) => { dispatch(receiveDmServerErrors(err.responseJSON)) })

export const fetchDmServer = (dmserverId) => (dispatch) =>
    DM_SERVER_API_UTIL.fetchDmServer(dmserverId).then((dmserver) => { dispatch(receiveDmServer(dmserver)) }, (err) => { dispatch(receiveDmServerErrors(err.responseJSON)) })

export const createDmServer = (dmserver) => (dispatch) =>
    DM_SERVER_API_UTIL.createDmServer(dmserver).then((dmserver) => {
        dispatch(removeDmServerErrors())
        return dispatch(receiveDmServer(dmserver))
    },
        (err) => { dispatch(receiveDmServerErrors(err.responseJSON)) })


export const updateDmServer = (dmserverId, dmserver) => (dispatch) =>
    DM_SERVER_API_UTIL.updateDmServer(dmserverId, dmserver).then((dmserver) => {
        dispatch(removeDmServerErrors())
        return dispatch(receiveDmServer(dmserver))
    },
        (err) => { dispatch(receiveDmServerErrors(err.responseJSON)) })

export const deleteDmServer = (dmserverId) => (dispatch) =>
    DM_SERVER_API_UTIL.deleteDmServer(dmserverId).then(() => { dispatch(removeDmServer(dmserverId)) }) 
