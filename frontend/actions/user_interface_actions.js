// export const SET_ACTIVE_SERVER = "SET_ACTIVE_SERVER";
// export const SET_ACTIVE_CHANNEL = "SET_ACTIVE_CHANNEL";
// export const SET_ACTIVE_DM_CHANNEL = "SET_ACTIVE_DM_CHANNEL";
// export const SET_CREATE_SERVER_MODAL_STATE = "SET_CREATE_SERVER_MODAL_STATE";
// export const OPEN_USER_SETTINGS = "OPEN_USER_SETTINGS";
// export const OPEN_CHANNEL_SETTINGS = "OPEN_CHANNEL_SETTINGS";
// export const SHOW_CHANNEL_NOTIFICATION = "SHOW_CHANNEL_NOTIFICATION";
// export const OPEN_SERVER_MENU = "OPEN_SERVER_MENU";
// export const DELETE_SERVER = "DELETE_SERVER";
// export const LEAVE_SERVER = "LEAVE_SERVER";
// export const SERVER_INVITE = "SERVER_INVITE";
// export const OPEN_PROFILE = "OPEN_PROFILE";
// export const EDIT_SERVER = "EDIT_SERVER";
// export const INVITE_MEMBER = "INVITE_MEMBER";
// export const DM_REQUEST = "DM_REQUEST";
// export const CREATE_CHANNEL_MODAL_STATE = "CREATE_CHANNEL_MODAL_STATE";



// export const setActiveServer = (server) => ({
//   type: SET_ACTIVE_SERVER,
//   server,
// });

// export const setCreateServerModalState = (modalState) => ({
//   type: SET_CREATE_SERVER_MODAL_STATE,
//   modalState,
// });

// export const setCreateChannelModalState = (modalState) => ({
//   type: CREATE_CHANNEL_MODAL_STATE,
//   modalState,
// });

// export const openServerMenu = (modalState) => ({
//   type: OPEN_SERVER_MENU,
//   modalState,
// });

// export const openUserSettings = (modalState) => ({
//   type: OPEN_USER_SETTINGS,
//   modalState,
// });

// export const openChannelSettings = (modalState) => ({
//   type: OPEN_CHANNEL_SETTINGS,
//   modalState,
// });

// export const showChannelNotification = (modalState) => ({
//   type: SHOW_CHANNEL_NOTIFICATION,
//   modalState,
// });

// export const deleteServer = (modalState) => ({
//   type: DELETE_SERVER,
//   modalState,
// });

// export const leaveServer = (modalState) => ({
//   type: LEAVE_SERVER,
//   modalState,
// });

// export const inviteMember = (modalState) => ({
//   type: INVITE_MEMBER,
//   modalState,
// });

// export const DMRequest = (modalState) => ({
//   type: DM_REQUEST,
//   modalState,
// });

// export const sendServerInvite = (modalState) => ({
//   type: SERVER_INVITE,
//   modalState,
// });
// export const openProfile = (modalState) => ({
//   type: OPEN_PROFILE,
//   modalState,
// });
// export const editServer = (modalState) => ({
//   type: EDIT_SERVER,
//   modalState,
// });

// export const setActiveChannel = (channel) => ({
//   type: SET_ACTIVE_CHANNEL,
//   channel,
// });

// export const setActiveDMChannel = (channel) => ({
//   type: SET_ACTIVE_DM_CHANNEL,
//   channel,
// });


export const SERVER_USER_OPTIONS_MODAL = "SERVER_USER_OPTIONS_MODAL";
export const SERVER_SETTINGS = "SERVER_SETTINGS";
export const STRIFE_WEB_RTC_CALL = "STRIFE_WEB_RTC_CALL";
export const WEB_RTC_DM_CALL = "WEB_RTC_DM_CALL";
export const INVITE_DM_MEMBERS_TO_CALL = "INVITE_DM_MEMBERS_TO_CALL";
export const INVITE_TO_SERVER = 'INVITE_TO_SERVER';
export const DELETE_SERVER_CHANNEL_MESSAGE = "DELETE_SERVER_CHANNEL_MESSAGE";
export const DELETE_DM_MESSAGE = 'DELETE_DM_MESSAGE';
export const ACTION_BUTTON = 'ACTION_BUTTON';
export const CHANNEL_SETTINGS = 'CHANNEL_SETTINGS';
export const LEAVE_SERVER = 'LEAVE_SERVER';
export const DELETE_SERVER = 'DELETE_SERVER';
export const CREATE_CHANNEL = 'CREATE_CHANNEL';
export const CHANNEL_DROP_DOWN = 'CHANNEL_DROP_DOWN';
export const NOT_FRIENDS_INVITE_TO_DM_MODAL = 'NOT_FRIENDS_INVITE_TO_DM_MODAL';
export const INVITE_TO_DM_MODAL = 'INVITE_TO_DM_MODAL';
export const CREATE_DM_MODAL_HOME_BAR = 'CREATE_DM_MODAL_HOME_BAR';
export const CREATE_DM_MODAL = 'CREATE_DM_MODAL';
export const NO_FRIENDS_DM_HOME_BAR_MODAL = 'NO_FRIENDS_DM_HOME_BAR_MODAL';
export const NO_FRIENDS_DM_MODAL = 'NO_FRIENDS_DM_MODAL';
export const EDIT_FRIEND_OPTIONS = 'EDIT_FRIEND_OPTIONS';
export const START_CONVERSATION_SEARCH = 'START_CONVERSATION_SEARCH';
export const USER_SEARCH = 'USER_SEARCH';
export const DOWNLOAD_APPS = 'DOWNLOAD_APPS';
export const FRF_ERROR = 'FRF_ERROR';
export const USER_SETTINGS = 'USER_SETTINGS';
export const CREATE_SERVER_FORM = 'CREATE_SERVER_FORM';
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const BLOCK_USER_CONFIRMATION = "BLOCK_USER_CONFIRMATION";
export const DELETE_FRIEND_CONFIRMATION = "DELETE_FRIEND_CONFIRMATION";
export const CONFIRM_LOG_OUT_CONFIRMATION = "CONFIRM_LOG_OUT_CONFIRMATION";
export const COPY_STRIFE_TAG_MODAL = "COPY_$TR!F3_TAG_MODAL";
export const SERVER_AVATAR_MODAL = "SERVER_AVATAR_MODAL";
export const SERVER_BANNER_MODAL = "SERVER_BANNER_MODAL";
export const EDIT_USER_AVATAR_MODAL = "EDIT_USER_AVATAR_MODAL";
export const EDIT_USER_BANNER_MODAL = "EDIT_USER_BANNER_MODAL";
export const EDIT_USER_PASSWORD_MODAL = "EDIT_USER_PASSWORD_MODAL";
export const EDIT_USER_USERNAME_MODAL = "EDIT_USER_USERNAME_MODAL";
export const EDIT_USER_EMAIL_MODAL = "EDIT_USER_EMAIL_MODAL";
export const EDIT_USER_PHONE_NUMBER_MODAL = "EDIT_USER_PHONE_NUMBER_MODAL";
export const USER_OWNS_SERVERS_WARNING_MODAL = "USER_OWNS_SERVERS_WARNING_MODAL";
export const REMOVE_USER_PHONE_NUMBER_MODAL = "REMOVE_USER_PHONE_NUMBER_MODAL";
export const EDIT_USER_DISPLAY_NAME_MODAL = "EDIT_USER_DISPLAY_NAME_MODAL";
export const DELETE_USER_ACCOUNT_MODAL = "DELETE_USER_ACCOUNT_MODAL";
export const DISABLE_USER_ACCOUNT_MODAL = "DISABLE_USER_ACCOUNT_MODAL";



export const openServerUserOptionsModal = (modalState) => {
  return {
    type: SERVER_USER_OPTIONS_MODAL,
    modalState,
  }
}


export const openServerSettingsModal = (modalState) => {
  return {
    type: SERVER_SETTINGS,
    modalState,
  }
}


export const open_Strife_WEB_RTC_CALL_Modal = (modalState) => {
  return {
    type: STRIFE_WEB_RTC_CALL,
    modalState,
  }
}

export const open_WEB_RTC_DM_CALL_Modal = (modalState) => {
  return {
    type: WEB_RTC_DM_CALL,
    modalState,
  }
}
export const openInviteDmMembersToCallModal = (modalState) => {
  return {
    type: INVITE_DM_MEMBERS_TO_CALL,
    modalState,
  }
}

export const openInviteToServerModal = (modalState) => {
  return {
    type: INVITE_TO_SERVER,
    modalState,
  }
}
export const openDeleteServerMessageModal = (modalState) => {
  return {
    type: DELETE_SERVER_CHANNEL_MESSAGE,
    modalState,
  }
}
export const openDeleteDMMessageModal = (modalState) => {
  return {
    type: DELETE_DM_MESSAGE,
    modalState,
  }
}
export const openChannelSettingsModal = (modalState) => {
  return {
    type: CHANNEL_SETTINGS,
    modalState,
  }
}
export const openActionButtonModal = (modalState) => {
  return {
    type: ACTION_BUTTON,
    modalState,
  }
}
export const openLeaveServerModal = (modalState) => {
  return {
    type: LEAVE_SERVER,
    modalState,
  }
}
export const openCreateDMHomeBarModal = (modalState) => {
  return {
    type: CREATE_DM_MODAL_HOME_BAR,
    modalState,
  }
}
export const openDeleteServerModal = (modalState) => {
  return {
    type: DELETE_SERVER,
    modalState,
  }
}
export const openCreateChannelModal = (modalState) => {
  return {
    type: CREATE_CHANNEL,
    modalState,
  }
}
export const openChannelDropDownModal = (modalState) => {
  return {
    type: CHANNEL_DROP_DOWN,
    modalState,
  }
}
export const openNotFriendsInviteToDmModal = (modalState) => {
  return {
    type: NOT_FRIENDS_INVITE_TO_DM_MODAL,
    modalState,
  }
}
export const openInviteToDMModal = (modalState) => {
  return {
    type: INVITE_TO_DM_MODAL,
    modalState,
  }
}

export const openCreateDMModal = (modalState) => {
  return {
    type: CREATE_DM_MODAL,
    modalState,
  }
}



export const openUserSearchModal = (modalState) => {
  return {
    type: USER_SEARCH,
    modalState,
  }
}

export const openStartConversationSearchModal = (modalState) => {
  return {
    type: START_CONVERSATION_SEARCH,
    modalState,
  }
}


export const openDownloadAppsModal = (modalState) => {
  return {
    type: DOWNLOAD_APPS,
    modalState,
  }
}

export const openEditFriendOptionsModal = (modalState) => {
  return {
    type: EDIT_FRIEND_OPTIONS,
    modalState,
  }
}


export const openFriendRequestErrorModal = (modalState) => {
  return {
    type: FRF_ERROR,
    modalState,
  }
}

export const openUserSettingsModal = (modalState) => {
  return {
    type: USER_SETTINGS,
    modalState,
  }
}

export const openCreateServerModal = (modalState) => {
  return {
    type: CREATE_SERVER_FORM,
    modalState,
  }
}


export const openNoFriendsDmHomeBarModal = (modalState) => {
  return {
    type: NO_FRIENDS_DM_HOME_BAR_MODAL,
    modalState,
  }
}

export const openNoFriendsDmModal = (modalState) => {
  return {
    type: NO_FRIENDS_DM_MODAL,
    modalState,
  }
}


export const openDeleteChannelModal = (modalState) => {
  return {
    type: DELETE_CHANNEL,
    modalState,
  }
}

export const openBlockUserConfirmationModal = (modalState) => {
  return {
    type: BLOCK_USER_CONFIRMATION,
    modalState,
  }
}

export const openDeleteFriendConfirmationModal = (modalState) => {
  return {
    type: DELETE_FRIEND_CONFIRMATION,
    modalState,
  }
}

export const openConfirmLogOutModal = (modalState) => {
  return {
    type: CONFIRM_LOG_OUT_CONFIRMATION,
    modalState,
  }
}

export const openCopyStrifeTagModal = (modalState) => {
  return {
    type: COPY_STRIFE_TAG_MODAL,
    modalState,
  }
}

export const openEditServerAvatarModal = (modalState) => {
  return {
    type: SERVER_AVATAR_MODAL,
    modalState,
  }
}

export const openEditServerBannerModal = (modalState) => {
  return {
    type: SERVER_BANNER_MODAL,
    modalState,
  }
}

export const openEditUserAvatarModal = (modalState) => {
  return {
    type: EDIT_USER_AVATAR_MODAL,
    modalState,
  }
}

export const openEditUserBannerModal = (modalState) => {
  return {
    type: EDIT_USER_BANNER_MODAL,
    modalState,
  }
}


export const openEditUserNameModal = (modalState) => {
  return {
    type: EDIT_USER_USERNAME_MODAL,
    modalState,
  }
}


export const openEditUserPasswordModal = (modalState) => {
  return {
    type: EDIT_USER_PASSWORD_MODAL,
    modalState,
  }
}

export const openEditUserEmailModal = (modalState) => {
  return {
    type: EDIT_USER_EMAIL_MODAL,
    modalState,
  }
}

export const openEditUserPhoneNumberModal = (modalState) => {
  return {
    type: EDIT_USER_PHONE_NUMBER_MODAL,
    modalState,
  }
}


export const openUserOwnsServersWarningModal = (modalState) => {
  return {
    type: USER_OWNS_SERVERS_WARNING_MODAL,
    modalState,
  }
}


export const openRemoveUserPhoneNumberModal = (modalState) => {
  return {
    type: REMOVE_USER_PHONE_NUMBER_MODAL,
    modalState,
  }
}


export const openEditUserDisplayNameModal = (modalState) => {
  return {
    type: EDIT_USER_DISPLAY_NAME_MODAL,
    modalState,
  }
}

export const openDeleteUserAccountModal = (modalState) => {
  return {
    type: DELETE_USER_ACCOUNT_MODAL,
    modalState,
  }
}

export const openDisableUserAccountModal = (modalState) => {
  return {
    type: DISABLE_USER_ACCOUNT_MODAL,
    modalState,
  }
}