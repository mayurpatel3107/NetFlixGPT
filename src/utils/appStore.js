import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
  },
});

export default appStore;
