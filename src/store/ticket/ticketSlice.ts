import { Ticket } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTicketByCode, fetchTickets } from "./ticketThunk";

export interface TicketState {
  ticket: Ticket | null;
  tickets: Ticket[] | [];
  loading: boolean;
  error: string | null;
}

const initialState: TicketState = {
  ticket: null,
  tickets: [],
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
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      if (state.ticket && state.ticket.id === action.payload.id) {
        state.ticket = action.payload;
      }
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
    builder.addCase(fetchTickets.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.tickets = [];
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.tickets = action.payload;
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
      state.tickets = [];
    });
  },
});

export const { setTicket, updateTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
