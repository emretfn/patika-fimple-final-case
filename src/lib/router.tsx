import { createBrowserRouter } from "react-router-dom";
import CreateTicketPage from "@/pages/create-ticket/CreateTicketPage";
import Error from "@/pages/error/ErrorPage";
import DefaultLayout from "@/layouts/default-layout/DefaultLayout";
import ApplicationSuccessPage from "@/pages/application-success/ApplicationSuccessPage";
import HomePage from "@/pages/home/HomePage";
import TicketInquiryPage from "@/pages/inquiry-ticket/InquiryTicketPage";
import TicketDetailPage from "@/pages/ticket-detail/TicketDetailPage";
import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import AdminLoginPage from "@/pages/admin-login/AdminLoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "basvuru-olustur", element: <CreateTicketPage /> },
      {
        path: "basvuru-basarili",
        element: <ApplicationSuccessPage />,
      },
      {
        path: "basvuru-sorgula",
        element: <TicketInquiryPage />,
      },
      {
        path: "basvuru/:ticketCode",
        element: <TicketDetailPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLoginPage />,
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Error />,
  },
]);
