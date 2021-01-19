import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    secretMessage: "",
    loggedIn: false,
  },
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setFirstName: (state, action) => {
      const { firstName } = action.payload;
      console.log(`Firs Name: ${firstName}`);
      state.login.name = firstName;
    },

    setLasName: (state, action) => {
      const { lastName } = action.payload;
      console.log(`Last Name: ${lastName}`);
      state.login.name = lastName;
    },

    setSecret: (state, action) => {
      const { secretMessage } = action.payload;
      console.log(` Secret Message: ${secretMessage}`);
      state.login.secretMessage = secretMessage;
    },

    logout: (state, action) => {
      console.log("Logging out");
      state.login.userId = 0;
      state.login.email = "";
      state.login.name = "";
      state.login.accessToken = null;
      state.login.secretMessage = "";
    },
  },
});
