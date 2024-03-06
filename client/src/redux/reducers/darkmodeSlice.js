import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    updateDarkMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {updateDarkMode} = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
