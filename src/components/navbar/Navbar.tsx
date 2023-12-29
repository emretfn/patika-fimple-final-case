import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "@/store/auth/hooks";
import Button from "../ui/Button/Button";
import clsx from "clsx";
import { useAppDispatch } from "@/store";
import { signOut } from "@/store/auth/authThunk";

const Navbar = () => {
  const { userData } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <nav className={clsx(styles.nav, "container")}>
        <Link to={userData ? "/admin" : "/"}>
          <img src="/ticketease-logo.svg" alt="ticketease logo" />
        </Link>
        {userData ? (
          <div className={styles.links}>
            <Link to={"/admin/basvuru-listesi"}>Başvuru Listesi</Link>
            <Button variant="outline" onClick={() => dispatch(signOut())}>
              Çıkış Yap
            </Button>
          </div>
        ) : (
          <div className={styles.links}>
            <Link to={"/basvuru-olustur"}>Başvuru Oluştur</Link>
            <Link to={"/basvuru-sorgula"}>Başvuru Sorgula</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
