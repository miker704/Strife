import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import modalPropsReducer from './modal_with_props_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  modalProps: modalPropsReducer,
});

export default uiReducer