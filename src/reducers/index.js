import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import loginSlice from 'app/store/auth/loginSlice';
import registerSlice from 'app/store/auth/registerSlice';
import confirmSlice from 'app/store/auth/confirmSlice';

export default combineReducers({
  auth,
  message,
  login   : loginSlice,
  register: registerSlice,
  confirm : confirmSlice,
});
