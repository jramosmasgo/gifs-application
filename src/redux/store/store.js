import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../slices/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
});
