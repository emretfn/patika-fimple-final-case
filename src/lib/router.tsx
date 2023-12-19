import { createBrowserRouter } from "react-router-dom";
import CreateTicketPage from "../pages/CreateTicket/CreateTicketPage";
import Error from "@/pages/Error/ErrorPage";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [{ path: "/basvuru-olustur", element: <CreateTicketPage /> }],
  },
]);
