import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, email: "", password: "" };

const reducers = {
  changeEmail: (state, action) => {
    state.email = action.payload;
  },
  changePassword: (state, action) => {
    state.password = action.payload;
  },
  loginUser: (state) => {
    state.isLoggedIn = true;
  },
  logoutUser: (state) => {
    state.isLoggedIn = false;
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { changeEmail, changePassword, loginUser, logoutUser } =
  userSlice.actions;

export default userSlice.reducer;
