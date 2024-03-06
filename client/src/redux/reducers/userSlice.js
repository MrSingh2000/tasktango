import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
  name: "",
  email: "",
  username: "",
  img: "",
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserState } = userSlice.actions;

export default userSlice.reducer;
