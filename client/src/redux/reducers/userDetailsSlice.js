import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mytaskid: [],
  collabtaskid: [],
  invitationid: [],
  history: [],
  //   this is the data, above are the ids
  tasks: [],
  collabtasks: [],
  invites: [],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    updateUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
