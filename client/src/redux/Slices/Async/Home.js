// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.withCredentials = true;
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../testData';

let otherAsyncCalled = null;

// URL car
export const getCars = createAsyncThunk(
  'cars',
  async (url, { rejectWithValue, signal }) => {
    try {
      if (otherAsyncCalled) {
        otherAsyncCalled.onabort();
      }

      const response = await axios.GET(url, { signal });
      otherAsyncCalled = signal;
      return response;
    } catch (err) {
      return rejectWithValue('hi it is err');
      // 만약 dispatch를 call한 컴포넌트 내부에서 처리하고 싶다면 dispatch 이후 .unwrap() <== 컴포넌트쪽에서 catch 쪽 인자로 전달된다
    }
  },
);

export const afterGetCars = (builder) => {
  builder.addCase(getCars.pending, (state, action) => {
    console.log('pending');
  });
  builder.addCase(getCars.fulfilled, ({ carList }, { payload }) => {
    carList.push(...payload);
  });
  // <thunk 처리과정 중에 reject를 처리하여 바로 redux state에 반영하고 싶을 때
  builder.addCase(getCars.rejected, ({ carList }, { payload }) => {
    carList.push({ carName: 'error', carCode: 'en', carPrice: 11111 });
  });
};
