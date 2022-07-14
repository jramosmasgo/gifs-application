import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("themePreferences")
    ? JSON.parse(localStorage.getItem("themePreferences"))
    : {
        themeName: "dark",
        colorName: "green",
      },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { type, payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = {
        themeName: payload.theme,
        colorName: payload.color,
      };
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
