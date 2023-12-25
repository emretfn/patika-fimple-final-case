import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import Button from "@/components/ui/Button/Button";

export default function Error() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.errorPage}>
      <h1>Opps!</h1>
      <p>Üzgünüz bir hata oluştu</p>
      <p>{error.message}</p>
      <Button onClick={handleGoHome}>Anasayfaya Dön</Button>
    </div>
  );
}
