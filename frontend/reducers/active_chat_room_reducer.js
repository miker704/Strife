import { SET_ACTIVE_DM_SERVER, SET_ACTIVE_SERVER_CHANNEL, SET_ACTIVE_SERVER } from "../actions/modal_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";



const initialActiveChatRoomState = Object.freeze({
  activeServer: { id: -1 },
  activeServerChannel: { id: -1 },
  activeDMServer: { id: -1 },
});

export default function activeChatroomReducer (state = initialActiveChatRoomState, action) {

  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case SET_ACTIVE_SERVER:
      return Object.assign({}, state, { activeServer: action.activeServer });
    case SET_ACTIVE_SERVER_CHANNEL:
      return Object.assign({}, state, { activeServerChannel: action.activeServerChannel });
    case SET_ACTIVE_DM_SERVER:
      return Object.assign({}, state, { activeDMServer: action.activeDMServer });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

