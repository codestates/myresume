import { configureStore } from "@reduxjs/toolkit";
import oauthSlice from "./Slices/Oauth";

export default configureStore({
  reducer: {
    oauthSlice,
  },
});

export const oauthSelector = (state) => state.oauthSlice;
