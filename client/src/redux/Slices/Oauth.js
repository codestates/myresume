import { createSlice } from "@reduxjs/toolkit";

//! extraReducers
const extraReducers = (builder) => {};

export const oauthSlice = createSlice({
  name: "oauth",
  initialState: {},
  reducers: {},
  extraReducers,
});

export const { kakaoOauth } = oauthSlice.actions;
export default oauthSlice.reducer;
