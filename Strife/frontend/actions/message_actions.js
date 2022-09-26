import * as MessageAPI from "../utils/message_api_utils.js";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const REMOVE_MESSAGE_ERRORS = "REMOVE_MESSAGE_ERRORS";

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const removeMessage = (messageId) => {
    return {
        type: REMOVE_MESSAGE,
        messageId
    }
}

export const receiveMessageErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    }
}

export const removeMessageErrors = () => {
    return {
        type: REMOVE_MESSAGE_ERRORS,

    }
}

//these are  getting alot more complicated for no reason 

// export const createMessage = (message) => (dispatch) =>
//     MessageAPI.createMessage(message).then((message) => dispatch(receiveMessage(message)),
//         (err) => dispatch(receiveMessageErrors(err.responseJSON)))

export const createMessage = (message) => (dispatch) =>
    MessageAPI.createMessage(message);




// export const updateMessage = (message) => (dispatch) =>
//     MessageAPI.updateMessage(message).then((message) => dispatch(receiveMessage(message)),
//         (err) => dispatch(receiveMessageErrors(err.responseJSON)))



export const updateMessage = (message) => (dispatch) =>
    MessageAPI.updateMessage(message);

// export const deleteMessage = (messageId) => (dispatch) =>
//     MessageAPI.deleteMessage(messageId).then((messagePayload) => dispatch(removeMessage(messagePayload)),
//         (err) => dispatch(receiveMessageErrors(err.responseJSON)))



export const deleteMessage = (messageId) => (dispatch) =>
    MessageAPI.deleteMessage(messageId);