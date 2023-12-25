import styles from "./AdminLoginPage.module.css";
import AdminLoginForm from "@/components/admin-login-form/AdminLoginForm";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import { getToken } from "@/lib/helpers/localStorageToken";
import { useAuth } from "@/store/auth/hooks";
import { Navigate } from "react-router-dom";

export default function AdminLoginPage() {
  const { token } = useAuth();

  if (token || getToken()) {
    return <Navigate to={"/admin/basvuru-listesi"} replace={true} />;
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader className={styles.cardHeader}>Yönetici Paneli Giriş</CardHeader>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
      </Card>
      <div className={styles.infoCard}>
        <p>
          Kullanıcı adı: <b>kodluyoruz</b> <br />
          Şifre: <b>bootcamp109</b>
        </p>
      </div>
    </div>
  );
}
