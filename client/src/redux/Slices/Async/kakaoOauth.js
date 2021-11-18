import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.withCredentials = true;

export const getKakaoAccess = createAsyncThunk("auth/kakao", async (code) => {
  try {
    const response = await axios.get(`http://localhost:5000/auth/kakao?code=${code}`);
    console.log(response);
  } catch (err) {}
});
