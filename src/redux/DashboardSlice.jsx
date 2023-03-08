import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfiles, likePost, userData } from '../api/dashboard';

const initialState = {
  isLoading: false,
  pageNumber: 0,
  userData: {},
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

export const likeAPost = createAsyncThunk('dashboard/likeAPost', likePost);

export const getUserData = createAsyncThunk('dashboard/getUserData', userData);

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetDashboardState: () => initialState,
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

    builder.addCase(likeAPost.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = {
        email: action.payload.email,
        balance: action.payload.earnedMoney,
        limit: action.payload.limitReached,
      };
    });
  },
});

export const { pageCounter, resetDashboardState } = dashboardSlice.actions;

export default dashboardSlice.reducer;
