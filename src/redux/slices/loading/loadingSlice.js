import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enable: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = true;
    },
    disable: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = false;
    },
  },
});

export const { enable, disable } = loadingSlice.actions;
export default loadingSlice.reducer;
