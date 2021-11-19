import { createSlice } from '@reduxjs/toolkit';
import AuthService from "app/services/auth.service";

export const submitRegister =
  (data) =>
  async (dispatch) => {
    return AuthService
      .createUser({
       name    : data.name,
       email   : data.email,
       password: data.password,
       language: data.language,
       loc     : data.location,
       website : data.website,
       bio     : data.bio,
       jobTitle: data.title,
       yrsExperience: data.yrsExperience,
       skill  : data.skills,
       status : data.status,
       rate   : data.rate,
       interest: data.interest,       
       avatar: data.avatar,
       resume: data.resume,
       userRole: data.userRole,
      })
      .then((response) => {
        return dispatch(registerSuccess(response.message));
      })
      .catch((errors) => {
        return dispatch(registerError(errors));
      });
  };

const initialState = {
  success: false,
  message: '',
  errors: [],
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.success = true;
      state.message = action.payload;
      state.errors = [];
    },
    registerError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { registerSuccess, registerError } = registerSlice.actions;

export default registerSlice.reducer;
