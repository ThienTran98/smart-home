import { createSlice } from "@reduxjs/toolkit";
import {
  listUserLocalStorage,
  userLocalStorage,
} from "../Service/localstorageService";

const initialState = {
  user: userLocalStorage.get(),
  listUser: listUserLocalStorage.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
    setUserLogOut: (state, action) => {
      state.user = action.payload;
    },
    setListAllUsers: (state, action) => {
      state.listUser = action.payload;
    },
  },
});

export const { setUserLogin, setUserLogOut, setListAllUsers } =
  userSlice.actions;

export default userSlice.reducer;
