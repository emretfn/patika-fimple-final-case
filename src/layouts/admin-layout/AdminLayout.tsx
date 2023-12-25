import styles from "./AdminLayout.module.css";
import Navbar from "@/components/navbar/Navbar";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAuth } from "@/store/auth/hooks";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const { token, loading } = useAuth();

  if (loading) {
    return <Spinner className={styles.pageSpinner} size={48} />;
  }

  if (!token) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
