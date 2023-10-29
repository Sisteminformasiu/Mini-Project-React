import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    useLanguage: true,
  },
  reducers: {
    handleLanguage: (state) => {
      state.useLanguage = !state.useLanguage;
    },
  },
});

export const { handleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
