import { createBrowserRouter } from "react-router-dom";
import CreateTicketPage from "@/pages/create-ticket/CreateTicketPage";
import Error from "@/pages/error/ErrorPage";
import DefaultLayout from "@/layouts/default-layout/DefaultLayout";
import ApplicationSuccessPage from "@/pages/application-success/ApplicationSuccessPage";
import HomePage from "@/pages/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/basvuru-olustur", element: <CreateTicketPage /> },
      {
        path: "/basvuru-basarili",
        element: <ApplicationSuccessPage />,
      },
    ],
  },
]);
