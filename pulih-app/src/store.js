import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "./features/languageSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});

export default store;
