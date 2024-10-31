import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logOut: state => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;
