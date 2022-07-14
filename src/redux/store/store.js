import { configureStore } from "@reduxjs/toolkit";
import loading from "../slices/loading/loadingSlice";
import theme from "../slices/theme/themeSlice";

export const store = configureStore({
  reducer: {
    loading,
    theme,
  },
});
