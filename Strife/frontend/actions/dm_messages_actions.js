import * as DM_MESSAGEAPIUTIL from "../utils/dm_message_api_util.js"

export const RECEIVE_DM_MESSAGE = "RECEIVE_DM_MESSAGE";
export const REMOVE_DM_MESSAGE = "REMOVE_DM_MESSAGE";
export const RECEIVE_DM_MESSAGE_ERRORS = "RECEIVE_DM_MESSAGE_ERRORS";
export const REMOVE_DM_MESSAGE_ERRORS = "REMOVE_DM_MESSAGE_ERRORS";

export const receiveDmMessage = (dm_message) => {
    return {
        type: RECEIVE_DM_MESSAGE,
        dm_message
    }
}

export const removeDmMessage = (dm_messageId) => {
    return {
        type: REMOVE_DM_MESSAGE,
        dm_messageId
    }
}

export const receiveDmMessageErrors = (errors) => {
    return {
        type: RECEIVE_DM_MESSAGE_ERRORS,
        errors
    }
}

export const removeDmMessageErrors = () => {
    return {
        type: REMOVE_DM_MESSAGE_ERRORS,

    }
}

//these are  getting alot more complicated for no reason 

export const createDmMessage = (dm_msg) => (dispatch) =>
   DM_MESSAGEAPIUTIL.createDmMessage(dm_msg).then((dm_message) => dispatch(receiveDmMessage(dm_message)),
        (err) => dispatch(receiveDmMessageErrors(err.responseJSON)))

export const updateDmMessage = (dm_msg) => (dispatch) =>
DM_MESSAGEAPIUTIL.updateDmMessage(dm_msg).then((dm_message) => dispatch(receiveDmMessage(dm_message)),
        (err) => dispatch(receiveDmMessageErrors(err.responseJSON)))

export const deleteDmMessage = (dm_msgId) => (dispatch) =>
DM_MESSAGEAPIUTIL.deleteDmMessage(dm_msgId).then((dm_messageId) => dispatch(removeDmMessage(dm_messageId)),
        (err) => dispatch(receiveDmMessageErrors(err.responseJSON)))