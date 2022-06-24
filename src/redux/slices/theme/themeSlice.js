import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    themeName: "dark",
    colorName: "green",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { theme, color }) => {
      // eslint-disable-next-line no-param-reassign
      state.value = {
        themeName: theme,
        colorName: color,
      };
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
