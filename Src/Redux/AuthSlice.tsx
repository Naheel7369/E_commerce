import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  loggedin: false,
  token: null as string | null,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loggedin: (state, action: PayloadAction<{token: string}>) => {
      console.log('Token received:', action.payload.token);
      state.loggedin = true;
      state.token = action.payload.token;
    },
    loggedout: state => {
      state.loggedin = false;
      state.token = null;
    },
  },
});

export const {loggedin, loggedout} = AuthSlice.actions;
export default AuthSlice.reducer;
