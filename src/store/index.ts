import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticket/ticketSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
