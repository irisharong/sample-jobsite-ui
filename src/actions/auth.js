import {REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE} from "./types";
import AuthService from "../services/auth.service";


export const register = (name, email, password, industry, promo, type) => (dispatch) => {
  return AuthService.register(name, email, password, industry, promo, type).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const verify = (token, email) => (dispatch) => {
  return AuthService.verify(token, email).then(
    (response) => {
      return Promise.resolve(response.data.message);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject(message);
    }
  );
};