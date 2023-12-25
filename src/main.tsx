import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/reset.css";
import "./styles/global.css";
import { getToken } from "./lib/helpers/localStorageToken.ts";
import { store } from "./store/index.ts";
import { fetchUserData } from "./store/auth/authThunk.ts";

// Check if user is logged in
if (getToken()) {
  store.dispatch(fetchUserData());
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
