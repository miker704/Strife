import * as ChannelAPI from "../utils/channel_api_util.js"

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const REMOVE_CHANNEL_ERRORS = "REMOVE_CHANNEL_ERRORS";


export const receiveChannel = (channelPayload) => {
    return {
        type: RECEIVE_CHANNEL,
        channelPayload
    }
}



export const removeChannel = (channelPayload) => {
    return {
        type: REMOVE_CHANNEL,
        channelPayload
    }
}

export const receiveChannelErrors = (errors) => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
}


export const removeChannelErrors = () => {
    return {
        type: REMOVE_CHANNEL_ERRORS,

    }
}

export const fetchChannel = (channelId) => (dispatch) =>
    ChannelAPI.fetchChannel(channelId).then((channelPayload) => {
        return dispatch(receiveChannel(channelPayload))
    }, err => (dispatch(receiveChannelErrors(err.responseJSON))))

export const createChannel = (channel) => (dispatch) =>
    ChannelAPI.createChannel(channel).then((channelPayload) => { dispatch(removeChannelErrors()), dispatch(receiveChannel(channelPayload)) }, (err) => { dispatch(receiveChannelErrors(err.responseJSON)) })

export const updateChannel = (channel) => (dispatch) =>
    ChannelAPI.updateChannel(channel).then((channelPayload) => { dispatch(removeChannelErrors()), dispatch(receiveChannel(channelPayload)) }, (err) => { dispatch(receiveChannelErrors(err.responseJSON)) })

export const deleteChannel = (channelId) => (dispatch) =>
    ChannelAPI.deleteChannel(channelId).then(() => dispatch(removeChannel(channelId)))


