import { Link } from "react-router-dom";
import styles from "./Navlinks.module.css";
import { User } from "@/types";
import Button from "../ui/Button/Button";
import { useAppDispatch } from "@/store";
import { signOut } from "@/store/auth/authThunk";

interface NavlinksProps {
  user: User | null;
}

export default function Navlinks({ user }: NavlinksProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      {user ? (
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
    </>
  );
}
