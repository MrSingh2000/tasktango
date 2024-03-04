import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import userSlice from "./reducers/userSlice";
import loadingSlice from "./reducers/loadingSlice";
import userDetailsSlice from "./reducers/userDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    loading: loadingSlice,
    userDetails: userDetailsSlice,
  },
});
