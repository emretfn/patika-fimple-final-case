import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "@/store/auth/hooks";
import Button from "../ui/Button/Button";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userData } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={clsx(styles.nav, "container")}>
        <Link to={userData ? "/admin" : "/"}>
          <img src="/ticketease-logo.svg" alt="ticketease logo" />
        </Link>
        <div className={styles.desktopLinks}>
          <Navlinks user={userData} />
        </div>
        <div className={styles.mobileMenu}>
          <Popover.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Popover.Trigger asChild>
              <Button variant="outline" size="icon">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </Popover.Trigger>
            <Popover.Content className={styles.mobilePopoverContent}>
              <Navlinks user={userData} />
            </Popover.Content>
          </Popover.Root>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
