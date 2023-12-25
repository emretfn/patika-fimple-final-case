import styles from "./AdminLoginPage.module.css";
import AdminLoginForm from "@/components/admin-login-form/AdminLoginForm";
import { Card, CardContent, CardHeader } from "@/components/card/Card";

export default function AdminLoginPage() {
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
