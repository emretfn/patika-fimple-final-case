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
      <img src="/error.svg" alt="error" />
      <div className={styles.contentContainer}>
        <h1>Opps!</h1>
        <p>{error.message}</p>
        <Button onClick={handleGoHome}>Anasayfaya Dön</Button>
      </div>
    </div>
  );
}
