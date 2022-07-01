export const SET_ACTIVE_SERVER = "SET_ACTIVE_SERVER";
export const SET_ACTIVE_CHANNEL = "SET_ACTIVE_CHANNEL";
export const SET_ACTIVE_DM_CHANNEL = "SET_ACTIVE_DM_CHANNEL";
export const SET_CREATE_SERVER_MODAL_STATE = "SET_CREATE_SERVER_MODAL_STATE";
export const OPEN_USER_SETTINGS = "OPEN_USER_SETTINGS";
export const OPEN_CHANNEL_SETTINGS = "OPEN_CHANNEL_SETTINGS";
export const SHOW_CHANNEL_NOTIFICATION = "SHOW_CHANNEL_NOTIFICATION";
export const OPEN_SERVER_MENU = "OPEN_SERVER_MENU";
export const DELETE_SERVER = "DELETE_SERVER";
export const LEAVE_SERVER = "LEAVE_SERVER";
export const SERVER_INVITE = "SERVER_INVITE";
export const OPEN_PROFILE = "OPEN_PROFILE";
export const EDIT_SERVER = "EDIT_SERVER";
export const INVITE_MEMBER = "INVITE_MEMBER";
export const DM_REQUEST = "DM_REQUEST";
export const CREATE_CHANNEL_MODAL_STATE = "CREATE_CHANNEL_MODAL_STATE";



export const setActiveServer = (server) => ({
    type: SET_ACTIVE_SERVER,
    server,
  });
  
  export const setCreateServerModalState = (modalState) => ({
    type: SET_CREATE_SERVER_MODAL_STATE,
    modalState,
  });
  
  export const setCreateChannelModalState = (modalState) => ({
    type: CREATE_CHANNEL_MODAL_STATE,
    modalState,
  });
  
  export const openServerMenu = (modalState) => ({
    type: OPEN_SERVER_MENU,
    modalState,
  });
  
  export const openUserSettings = (modalState) => ({
    type: OPEN_USER_SETTINGS,
    modalState,
  });
  
  export const openChannelSettings = (modalState) => ({
    type: OPEN_CHANNEL_SETTINGS,
    modalState,
  });
  
  export const showChannelNotification = (modalState) => ({
    type: SHOW_CHANNEL_NOTIFICATION,
    modalState,
  });
  
  export const deleteServer = (modalState) => ({
    type: DELETE_SERVER,
    modalState,
  });
  
  export const leaveServer = (modalState) => ({
    type: LEAVE_SERVER,
    modalState,
  });
  
  export const inviteMember = (modalState) => ({
    type: INVITE_MEMBER,
    modalState,
  });
  
  export const DMRequest = (modalState) => ({
    type: DM_REQUEST,
    modalState,
  });
  
  export const sendServerInvite = (modalState) => ({
    type: SERVER_INVITE,
    modalState,
  });
  export const openProfile = (modalState) => ({
    type: OPEN_PROFILE,
    modalState,
  });
  export const editServer = (modalState) => ({
    type: EDIT_SERVER,
    modalState,
  });
  
  export const setActiveChannel = (channel) => ({
    type: SET_ACTIVE_CHANNEL,
    channel,
  });
  
  export const setActiveDMChannel = (channel) => ({
    type: SET_ACTIVE_DM_CHANNEL,
    channel,
  });
  