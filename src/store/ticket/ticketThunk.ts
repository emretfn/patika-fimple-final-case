import api from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const fetchTicketByCode = createAsyncThunk(
  "ticket/fetchTicketByCode",
  async (code: string) => {
    const { data } = await api.get(`/tickets/${code}`);
    return data;
  }
);

export const fetchTickets = createAsyncThunk(
  "ticket/fetchTickets",
  async (status: "all" | "unsolved" = "all", { rejectWithValue }) => {
    const endpoint = status === "unsolved" ? "/tickets/open" : `/tickets`;
    try {
      const { data } = await api.get(endpoint);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);
