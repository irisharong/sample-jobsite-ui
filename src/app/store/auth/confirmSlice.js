import { createSlice } from '@reduxjs/toolkit';
import AuthService from "app/services/auth.service";

export const confirmEmail =
  (token, email) => 
  async (dispatch) => {
    return AuthService
      .confirm(token, email)
      .then((response) => {
        return dispatch(confirmSuccess(response.message));
      })
    .catch((errors) => {
      return dispatch(confirmError(errors));
    });
  };

const initialState = {
  success: false,
  message: '',
  errors: [],
};

const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    confirmSuccess: (state, action) => {
      state.success = true;
      state.message = action.payload;
      state.errors = [];
    },
    confirmError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { confirmSuccess, confirmError } = confirmSlice.actions;

export default confirmSlice.reducer;
