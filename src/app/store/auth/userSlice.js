import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from "react-router-dom";

export const setUserData = (user) => async (dispatch, getState) => {
  const history = useHistory();
  console.log(user);
  if(user.user.role == "contractor") {
    //redirect
    history.push("/settings");
  }

  if(user.user.role == "employer") {
    history.push("/employer");
  }

  dispatch(setUser(user));
};

const initialState = {
  role: [], // guest
  data: {
  },
};

const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
  },
  extraReducers: {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;