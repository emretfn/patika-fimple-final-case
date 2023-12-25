import api from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTicketByCode = createAsyncThunk(
  "ticket/fetchTicketByCode",
  async (code: string) => {
    const { data } = await api.get(`/tickets/${code}`);
    return data;
  }
);
