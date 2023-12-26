import axios from "axios";
import { API_URL } from "./config";
import { store } from "@/store";
import { signOut } from "@/store/auth/authThunk";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(signOut());
    }

    return Promise.reject(error);
  }
);

export default api;
