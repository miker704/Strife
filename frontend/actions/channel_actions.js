import * as ChannelAPI from "../utils/channel_api_util.js"

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS_VIA_INJEXTION = "RECEIVE_CHANNELS_VIA_INJEXTION";
export const UPDATE_CHANNEL = "UPDATE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const REMOVE_CHANNEL_ERRORS = "REMOVE_CHANNEL_ERRORS";



//websocket redux calls for channel actions
export const WEB_SOCKET_RECEIVE_CHANNEL = "WEB_SOCKET_RECEIVE_CHANNEL";
export const WEB_SOCKET_UPDATE_CHANNEL = "WEB_SOCKET_UPDATE_CHANNEL";
export const WEB_SOCKET_REMOVE_CHANNEL = "WEB_SOCKET_REMOVE_CHANNEL";



export const receiveChannel = (channelPayload) => {
    return {
        type: RECEIVE_CHANNEL,
        channelPayload
    }
}

export const update_Channel = (channelPayload) => {
    return {
        type: UPDATE_CHANNEL,
        channelPayload
    }
}

export const receiveChannelsViaInjextion = (channelInjextion) => {
    return {
        type: RECEIVE_CHANNELS_VIA_INJEXTION,
        channelInjextion
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

export const receiveChannelViaWebSocket = (channelPayload) => {
    return {
        type: WEB_SOCKET_RECEIVE_CHANNEL,
        channelPayload
    }
}
export const updateChannelViaWebSocket = (channelPayload) => {
    return {
        type: WEB_SOCKET_UPDATE_CHANNEL,
        channelPayload
    }
}
export const removeChannelViaWebSocket = (channelPayload) => {
    return {
        type: WEB_SOCKET_REMOVE_CHANNEL,
        channelPayload
    }
}

export const fetchChannel = (channelId) => (dispatch) =>
    ChannelAPI.fetchChannel(channelId).then((channelPayload) => {
        return dispatch(receiveChannel(channelPayload))
    }, err => (dispatch(receiveChannelErrors(err.responseJSON))))

export const createChannel = (channel) => (dispatch) =>
    ChannelAPI.createChannel(channel).then((channelPayload) => {
        dispatch(removeChannelErrors());
        return dispatch(receiveChannel(channelPayload))
    },
        (err) => { dispatch(receiveChannelErrors(err.responseJSON)) })

export const updateChannel = (channel) => (dispatch) =>
    ChannelAPI.updateChannel(channel).then((channelPayload) => {
        dispatch(removeChannelErrors());
        return dispatch(receiveChannel(channelPayload))
    }, (err) => { dispatch(receiveChannelErrors(err.responseJSON)) })

export const deleteChannel = (channelId) => (dispatch) =>
    ChannelAPI.deleteChannel(channelId).then(() => dispatch(removeChannel(channelId)))


export const createChannelsViaServerTemplate = (channelInjextion) => (dispatch) =>
    ChannelAPI.createChannelsViaServerTemplate(channelInjextion).then((channelInjextion) => {
        return dispatch(receiveChannelsViaInjextion(channelInjextion))
    }, (err) => { dispatch(receiveChannelErrors(err.responseJSON)) })

export const webSocketReceiveChannel = (channelId) => (dispatch) =>
    ChannelAPI.fetchChannel(channelId).then((channelPayload) => {
        return dispatch(receiveChannelViaWebSocket(channelPayload))
    }, err => (dispatch(receiveChannelErrors(err.responseJSON))))