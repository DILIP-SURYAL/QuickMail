import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    selectedMail: null,
    searchText: "",
    emails: [],
    authUser: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const {
  setOpen,
  setAuthUser,
  setEmails,
  setSearchText,
  setSelectedMail,
} = appSlice.actions;

export default appSlice.reducer;
