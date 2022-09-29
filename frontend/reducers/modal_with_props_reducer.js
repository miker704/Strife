
import {  OPEN_MODAL_WITH_PROPS } from '../actions/modal_actions';


export default function modalPropsReducer (state = {}, action) {

  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case OPEN_MODAL_WITH_PROPS:
      return nextState[action.modal_With_Props] = action.modal_With_Props;
    default:
      return state;
  }
}
