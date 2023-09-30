// import * as actions from "../actions/ui_actions";

// const initialUIState = Object.freeze({
//   activeServer: null,
//   activeChannel: { id: -1 },
//   activeDMChannel: { id: -1 },
//   createServerModalState: false,
//   openServerMenu: false,
//   deleteServerModalState: false,
//   leaveServerModalState: false,
//   editServerModalState: false,
//   inviteMemberModalState: false,
//   dmRequestModalState: false,
//   openUserSettings: false,
//   createChannelModalState: false,
//   openChannelSettings: false,
//   showChannelNotification: false,
// });

// export default (state = initialUIState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case actions.CREATE_CHANNEL_MODAL_STATE:
//       return Object.assign({}, state, {
//         createChannelModalState: action.modalState,
//       });
//     case actions.OPEN_USER_SETTINGS:
//       return Object.assign({}, state, { openUserSettings: action.modalState });
//     case actions.OPEN_CHANNEL_SETTINGS:
//       return Object.assign({}, state, {
//         openChannelSettings: action.modalState,
//       });
//     case actions.SHOW_CHANNEL_NOTIFICATION:
//       return Object.assign({}, state, {
//         showChannelNotification: action.modalState,
//       });
//     case actions.SET_ACTIVE_SERVER:
//       return Object.assign({}, state, { activeServer: action.server });
//     case actions.SET_CREATE_SERVER_MODAL_STATE:
//       return Object.assign({}, state, {
//         createServerModalState: action.modalState,
//       });
//     case actions.OPEN_SERVER_MENU:
//       return Object.assign({}, state, {
//         openServerMenu: action.modalState,
//       });
//     case actions.DELETE_SERVER:
//       return Object.assign({}, state, {
//         deleteServerModalState: action.modalState,
//       });
//     case actions.LEAVE_SERVER:
//       return Object.assign({}, state, {
//         leaveServerModalState: action.modalState,
//       });
//     case actions.INVITE_MEMBER:
//       return Object.assign({}, state, {
//         inviteMemberModalState: action.modalState,
//       });
//     case actions.DM_REQUEST:
//       return Object.assign({}, state, {
//         dmRequestModalState: action.modalState,
//       });
//     case actions.EDIT_SERVER:
//       return Object.assign({}, state, {
//         editServerModalState: action.modalState,
//       });
//     case actions.SET_ACTIVE_CHANNEL:
//       return Object.assign({}, state, { activeChannel: action.channel });
//     case actions.SET_ACTIVE_DM_CHANNEL:
//       return Object.assign({}, state, { activeDMChannel: action.channel });
//     default:
//       return state;
//   }
// };

import {
    SERVER_USER_OPTIONS_MODAL,
    SERVER_SETTINGS,
    STRIFE_WEB_RTC_CALL,
    WEB_RTC_DM_CALL,
    INVITE_DM_MEMBERS_TO_CALL,
    INVITE_TO_SERVER,
    DELETE_SERVER_CHANNEL_MESSAGE,
    DELETE_DM_MESSAGE,
    ACTION_BUTTON,
    CHANNEL_SETTINGS,
    LEAVE_SERVER,
    DELETE_SERVER,
    CREATE_CHANNEL,
    CHANNEL_DROP_DOWN,
    NOT_FRIENDS_INVITE_TO_DM_MODAL,
    INVITE_TO_DM_MODAL,
    CREATE_DM_MODAL_HOME_BAR,
    CREATE_DM_MODAL,
    NO_FRIENDS_DM_HOME_BAR_MODAL,
    NO_FRIENDS_DM_MODAL,
    EDIT_FRIEND_OPTIONS,
    START_CONVERSATION_SEARCH,
    USER_SEARCH,
    DOWNLOAD_APPS,
    FRF_ERROR,
    USER_SETTINGS,
    CREATE_SERVER_FORM,
    DELETE_CHANNEL,
    BLOCK_USER_CONFIRMATION,
    DELETE_FRIEND_CONFIRMATION,
    CONFIRM_LOG_OUT_CONFIRMATION,
    COPY_STRIFE_TAG_MODAL,
    SERVER_AVATAR_MODAL,
    SERVER_BANNER_MODAL,
    EDIT_USER_AVATAR_MODAL,
    EDIT_USER_BANNER_MODAL,
    EDIT_USER_PASSWORD_MODAL,
    EDIT_USER_USERNAME_MODAL,
    EDIT_USER_EMAIL_MODAL,
    EDIT_USER_PHONE_NUMBER_MODAL,
    USER_OWNS_SERVERS_WARNING_MODAL,
    REMOVE_USER_PHONE_NUMBER_MODAL,
    EDIT_USER_DISPLAY_NAME_MODAL,
    DELETE_USER_ACCOUNT_MODAL,
    DISABLE_USER_ACCOUNT_MODAL
}
    from "../actions/user_interface_actions.js";

import { LOGOUT_CURRENT_USER } from "../actions/session_actions.js";


const initialUIState = Object.freeze({
    ServerUserOptionsModal: false,
    ServerSettings: false,
    StrifeWebRtcCall: false,
    WebRtcDmCall: false,
    InviteDmMembersToCall: false,
    InviteToServer: false,
    DeleteServerChannelMessage: false,
    DeleteDmMessage: false,
    ActionButton: false,
    ChannelSettings: false,
    LeaveServer: false,
    DeleteServer: false,
    CreateChannel: false,
    ChannelDropDown: false,
    NotFriendsInviteToDmModal: false,
    InviteToDmModal: false,
    CreateDmModalHomeBar: false,
    CreateDmModal: false,
    NoFriendsDmHomeBarModal: false,
    NoFriendsDmModal: false,
    EditFriendOptions: false,
    StartConversationSearch: false,
    UserSearch: false,
    DownloadApps: false,
    FrfError: false,
    UserSettings: false,
    CreateServerForm: false,
    DeleteChannel: false,
    BlockUserConfirmation: false,
    DeleteFriendConfirmation: false,
    ConfirmLogOutConfirmation: false,
    CopyStrifeTagModal: false,
    ServerAvatarModal: false,
    ServerBannerModal: false,
    EditUserAvatarModal: false,
    EditUserBannerModal: false,
    EditUserPasswordModal: false,
    EditUserUsernameModal: false,
    EditUserEmailModal: false,
    EditUserPhoneNumberModal: false,
    UserOwnsServersWarningModal: false,
    RemoveUserPhoneNumberModal: false,
    EditUserDisplayNameModal: false,
    DeleteUserAccountModal: false,
    DisableUserAccountModal: false,
});


const modalStateReducer = (state = initialUIState, action) => {
    Object.freeze(state);
    switch (action.type) {

        case SERVER_USER_OPTIONS_MODAL:
            return Object.assign({}, state, {
                ServerUserOptionsModal: action.modalState,
            });
        case SERVER_SETTINGS:
            return Object.assign({}, state, {
                ServerSettings: action.modalState,
            });
        case STRIFE_WEB_RTC_CALL:
            return Object.assign({}, state, {
                StrifeWebRtcCall: action.modalState,
            });
        case WEB_RTC_DM_CALL:
            return Object.assign({}, state, {
                WebRtcDmCall: action.modalState,
            });
        case INVITE_DM_MEMBERS_TO_CALL:
            return Object.assign({}, state, {
                InviteDmMembersToCall: action.modalState,
            });
        case INVITE_TO_SERVER:
            return Object.assign({}, state, {
                InviteToServer: action.modalState,
            });
        case DELETE_SERVER_CHANNEL_MESSAGE:
            return Object.assign({}, state, {
                DeleteServerChannelMessage: action.modalState,
            });
        case DELETE_DM_MESSAGE:
            return Object.assign({}, state, {
                DeleteDmMessage: action.modalState,
            });
        case ACTION_BUTTON:
            return Object.assign({}, state, {
                ActionButton: action.modalState,
            });
        case CHANNEL_SETTINGS:
            return Object.assign({}, state, {
                ChannelSettings: action.modalState,
            });
        case LEAVE_SERVER:
            return Object.assign({}, state, {
                LeaveServer: action.modalState,
            });
        case DELETE_SERVER:
            return Object.assign({}, state, {
                DeleteServer: action.modalState,
            });
        case CREATE_CHANNEL:
            return Object.assign({}, state, {
                CreateChannel: action.modalState,
            });
        case CHANNEL_DROP_DOWN:
            return Object.assign({}, state, {
                ChannelDropDown: action.modalState,
            });
        case NOT_FRIENDS_INVITE_TO_DM_MODAL:
            return Object.assign({}, state, {
                NotFriendsInviteToDmModal: action.modalState,
            });
        case INVITE_TO_DM_MODAL:
            return Object.assign({}, state, {
                InviteToDmModal: action.modalState,
            });
        case CREATE_DM_MODAL_HOME_BAR:
            return Object.assign({}, state, {
                CreateDmModalHomeBar: action.modalState,
            });
        case CREATE_DM_MODAL:
            return Object.assign({}, state, {
                CreateDmModal: action.modalState,
            });
        case NO_FRIENDS_DM_HOME_BAR_MODAL:
            return Object.assign({}, state, {
                NoFriendsDmHomeBarModal: action.modalState,
            });
        case NO_FRIENDS_DM_MODAL:
            return Object.assign({}, state, {
                NoFriendsDmModal: action.modalState,
            });
        case EDIT_FRIEND_OPTIONS:
            return Object.assign({}, state, {
                EditFriendOptions: action.modalState,
            });
        case START_CONVERSATION_SEARCH:
            return Object.assign({}, state, {
                StartConversationSearch: action.modalState,
            });
        case USER_SEARCH:
            return Object.assign({}, state, {
                UserSearch: action.modalState,
            });
        case DOWNLOAD_APPS:
            return Object.assign({}, state, {
                DownloadApps: action.modalState,
            });
        case FRF_ERROR:
            return Object.assign({}, state, {
                FrfError: action.modalState,
            });
        case USER_SETTINGS:
            return Object.assign({}, state, {
                UserSettings: action.modalState,
            });
        case CREATE_SERVER_FORM:
            return Object.assign({}, state, {
                CreateServerForm: action.modalState,
            });
        case DELETE_CHANNEL:
            return Object.assign({}, state, {
                DeleteChannel: action.modalState,
            });
        case BLOCK_USER_CONFIRMATION:
            return Object.assign({}, state, {
                BlockUserConfirmation: action.modalState,
            });
        case DELETE_FRIEND_CONFIRMATION:
            return Object.assign({}, state, {
                DeleteFriendConfirmation: action.modalState,
            });
        case CONFIRM_LOG_OUT_CONFIRMATION:
            return Object.assign({}, state, {
                ConfirmLogOutConfirmation: action.modalState,
            });
        case COPY_STRIFE_TAG_MODAL:
            return Object.assign({}, state, {
                CopyStrifeTagModal: action.modalState,
            });
        case SERVER_AVATAR_MODAL:
            return Object.assign({}, state, {
                ServerAvatarModal: action.modalState,
            });
        case SERVER_BANNER_MODAL:
            return Object.assign({}, state, {
                ServerBannerModal: action.modalState,
            });
        case EDIT_USER_AVATAR_MODAL:
            return Object.assign({}, state, {
                EditUserAvatarModal: action.modalState,
            });
        case EDIT_USER_BANNER_MODAL:
            return Object.assign({}, state, {
                EditUserBannerModal: action.modalState,
            });
        case EDIT_USER_PASSWORD_MODAL:
            return Object.assign({}, state, {
                EditUserPasswordModal: action.modalState,
            });
        case EDIT_USER_USERNAME_MODAL:
            return Object.assign({}, state, {
                EditUserUsernameModal: action.modalState,
            });
        case EDIT_USER_EMAIL_MODAL:
            return Object.assign({}, state, {
                EditUserEmailModal: action.modalState,
            });
        case EDIT_USER_PHONE_NUMBER_MODAL:
            return Object.assign({}, state, {
                EditUserPhoneNumberModal: action.modalState,
            });
        case USER_OWNS_SERVERS_WARNING_MODAL:
            return Object.assign({}, state, {
                UserOwnsServersWarningModal: action.modalState,
            });
        case REMOVE_USER_PHONE_NUMBER_MODAL:
            return Object.assign({}, state, {
                RemoveUserPhoneNumberModal: action.modalState,
            });
        case EDIT_USER_DISPLAY_NAME_MODAL:
            return Object.assign({}, state, {
                EditUserDisplayNameModal: action.modalState,
            });
        case DELETE_USER_ACCOUNT_MODAL:
            return Object.assign({}, state, {
                DeleteUserAccountModal: action.modalState,
            });
        case DISABLE_USER_ACCOUNT_MODAL:
            return Object.assign({}, state, {
                DisableUserAccountModal: action.modalState,
            });
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};


export default modalStateReducer;