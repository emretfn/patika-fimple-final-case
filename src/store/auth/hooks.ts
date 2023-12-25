import { useSelector } from "react-redux";
import { RootState } from "..";

export const useAuth = () => useSelector((state: RootState) => state.auth);
