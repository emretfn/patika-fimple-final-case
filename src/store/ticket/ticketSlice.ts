import { Ticket } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTicketByCode } from "./ticketThunk";

export interface TicketState {
  ticket: Ticket | null;
  loading: boolean;
  error: string | null;
}

const initialState: TicketState = {
  ticket: null,
  loading: false,
  error: null,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicket: (state, action: PayloadAction<Ticket>) => {
      state.ticket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTicketByCode.fulfilled, (state, action: PayloadAction<Ticket>) => {
      state.ticket = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchTicketByCode.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.ticket = null;
    });
    builder.addCase(fetchTicketByCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
      state.ticket = null;
    });
  },
});

export const { setTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
