import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/store/auth/hooks";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const { token, loading } = useAuth();

  if (!loading && !token) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
