export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_WITH_PROPS = 'OPEN_MOD_W/PROPS';


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