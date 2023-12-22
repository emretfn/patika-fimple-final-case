import { useSelector } from "react-redux";
import { RootState } from "../";

export const useTicket = () => useSelector((state: RootState) => state.ticket.ticket);
