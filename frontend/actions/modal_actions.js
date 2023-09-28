export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_WITH_PROPS = 'OPEN_MOD_W/PROPS';
export const SET_ACTIVE_SERVER = "SET_ACTIVE_SERVER";
export const SET_ACTIVE_SERVER_CHANNEL = "SET_ACTIVE_SERVER_CHANNEL";
export const SET_ACTIVE_DM_SERVER = "SET_ACTIVE_DM_SERVER";

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openModalWithProps = (modal_With_Props) => {
  return {
    type: OPEN_MODAL_WITH_PROPS,
    modal_With_Props
  };
};

// export const openModalWithProps = (modal,modal_With_Props) => {
//   return {
//     type: OPEN_MODAL_WITH_PROPS,
//     modal,
//     modal_With_Props
//   };
// };


export const setActiveServer = (server) => {
  return {
    type: SET_ACTIVE_SERVER,
    activeServer: server
  };
};

export const setActiveServerChannel = (channel) => {
  return {
    type: SET_ACTIVE_SERVER_CHANNEL,
    activeServerChannel: channel
  };
};


export const setActiveDmServer = (dmServer) => {
  return {
    type: SET_ACTIVE_DM_SERVER,
    activeDMServer: dmServer
  };
};