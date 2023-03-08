import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../api/auth';
// import { persistor } from '../store';
export const userLogin = createAsyncThunk('auth/userLogin', loginUser);
export const userRegister = createAsyncThunk('auth/userRegister', registerUser);

const initialState = {
  token: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.token = null;
      state.isLoading = false;
    });
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(userRegister.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
  },
});
export const { resetState } = authSlice.actions;
export default authSlice.reducer;
