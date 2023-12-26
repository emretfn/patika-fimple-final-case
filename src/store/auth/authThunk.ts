import api from "@/lib/api";
import { getToken, removeToken, setToken } from "@/lib/helpers/localStorageToken";
import { AdminLoginType } from "@/lib/validations/admin-login-schema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = getToken();
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const response = await api.get("/auth/me");

      return { ...response.data, accessToken };
    } catch (error) {
      removeToken();
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload: AdminLoginType, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", payload);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  removeToken();
});
