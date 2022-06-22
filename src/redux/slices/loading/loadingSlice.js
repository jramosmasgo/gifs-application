import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enable: (state) => {
      state.value = true;
    },
    disable: (state) => {
      state.value = false;
    },
  },
});

export const { enable, disable } = loadingSlice.actions;
export default loadingSlice.reducer;
