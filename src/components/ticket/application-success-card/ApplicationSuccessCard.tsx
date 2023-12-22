import { Link } from "react-router-dom";
import styles from "./ApplicationSuccessCard.module.css";
import { Check, Copy, Printer } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import useClipboard from "@/hooks/useClipboard";
import { Ticket } from "@/types";

interface ApplicationSuccessCardProps {
  ticket: Ticket;
}

export default function ApplicationSuccessCard({ ticket }: ApplicationSuccessCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  const { copied, copyToClipboard } = useClipboard();
  const date = new Date(ticket.createdAt);

  return (
    <div className={styles.applicationSuccessCard}>
      <div className={styles.cardHeader}>
        <h2>Başvurunuz başarıyla alındı!</h2>
        <p>
          Destek ekibimizle iletişime geçtiğiniz için teşekkür ederiz. Biletinizi başarıyla aldık ve
          ekibimiz en kısa sürede size geri dönecektir.
        </p>
      </div>
      <div ref={contentRef} className={styles.cardContent}>
        <span className={styles.subtitle}>
          Başvuru detayları ·
          {" " + date.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}
        </span>
        <h4>Başvuru Sahibi Bilgileri:</h4>
        <UserInfo title="Ad" value={ticket.userName} />
        <UserInfo title="Soyad" value={ticket.userSurname} />
        <UserInfo title="Yaş" value={ticket.userAge.toString()} />
        <UserInfo title="TC Kimlik Numarası" value={ticket.userTc} />
        <UserInfo title="Başvuru Nedeni" value={ticket.reason} />
        <UserInfo title="Adres" value={ticket.address} />

        <div className={styles.badgeWrapper}>
          <span className={styles.subtitle}>Başvuru kodu:</span>
          <CodeBadge
            ticketCode={ticket.ticketCode}
            copyToClipboard={copyToClipboard}
            copied={copied}
          />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div>
          <Button onClick={handlePrint} size="icon" variant="outline">
            <Printer />
          </Button>
        </div>
        <div>
          <Link to={"/basvuru-sorgula"}>Başvuru durumunu sorgula</Link>
        </div>
      </div>
    </div>
  );
}

const UserInfo = ({ title, value }: { title: string; value: string }) => {
  return (
    <p>
      <span>{title}:</span> {value}
    </p>
  );
};

const CodeBadge = ({
  ticketCode,
  copyToClipboard,
  copied,
}: {
  ticketCode: string;
  copyToClipboard: (text: string) => void;
  copied: boolean;
}) => {
  return (
    <button className={styles.badge} onClick={() => copyToClipboard(ticketCode)}>
      <span>{ticketCode}</span>
      {!copied ? <Copy className={styles.badgeIcon} /> : <Check className={styles.badgeIcon} />}
    </button>
  );
};
