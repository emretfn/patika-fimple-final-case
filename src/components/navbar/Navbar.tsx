import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to={"/"}>
          <img src="/ticketease-logo.svg" alt="ticketease logo" />
        </Link>
        <div className={styles.links}>
          <Link to={"/basvuru-olustur"}>Başvuru Oluştur</Link>
          <Link to={"/basvuru-sorgula"}>Başvuru Sorgula</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
