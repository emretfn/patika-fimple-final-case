import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut } from "./authThunk";
import { User } from "@/types";

interface AuthState {
  token: string | null;
  loading: boolean;
  userData: User | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.token = accessToken;
      state.userData = user;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      const { accessToken, ...user } = action.payload;
      state.token = accessToken;
      state.userData = user;
      state.loading = false;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.loading = false;
      state.token = null;
      state.userData = null;
    });
  },
});

export default authSlice.reducer;
