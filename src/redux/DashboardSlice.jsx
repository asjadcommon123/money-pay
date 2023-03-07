import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfiles } from '../api/dashboard';

const initialState = {
  isLoading: false,
  pageNumber: 2,
  profiles: [],
};

export const uploadProfiles = createAsyncThunk(
  'dashboard/uploadProfiles',
  getProfiles
);
export const updateProfilesList = createAsyncThunk(
  'dashboard/uploadProfilesList',
  getProfiles
);

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    pageCounter: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadProfiles.fulfilled, (state, action) => {
      state.profiles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(uploadProfiles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadProfiles.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateProfilesList.fulfilled, (state, action) => {
      state.profiles = [...state.profiles, ...action.payload];
    });
  },
});

export const { pageCounter } = dashboardSlice.actions;

export default dashboardSlice.reducer;
