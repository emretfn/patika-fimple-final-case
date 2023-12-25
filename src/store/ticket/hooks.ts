import { useSelector } from "react-redux";
import { RootState } from "..";

export const useTicketStore = () => useSelector((state: RootState) => state.ticket);
