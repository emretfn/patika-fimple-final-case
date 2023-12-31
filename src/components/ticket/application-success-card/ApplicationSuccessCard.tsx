import { Link } from "react-router-dom";
import styles from "./ApplicationSuccessCard.module.css";
import { Check, Copy, Printer } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import useClipboard from "@/hooks/useClipboard";
import { Ticket } from "@/types";
import Badge from "@/components/ui/Badge/Badge";
import { Card, CardContent } from "@/components/card/Card";
import ApplicationInfo from "../application-info/ApplicationInfo";

interface ApplicationSuccessCardProps {
  ticket: Ticket;
}

export default function ApplicationSuccessCard({ ticket }: ApplicationSuccessCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  const { copied, copyToClipboard } = useClipboard();

  //Application time
  const date = new Date(ticket.createdAt);
  const applicationTime = date.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });

  return (
    <Card className={styles.card}>
      <CardContent>
        <div ref={contentRef} className={styles.details}>
          <span className={styles.subtitle}>Başvuru detayları · {applicationTime}</span>
          <h4>Başvuru Sahibi Bilgileri:</h4>
          <ApplicationInfo ticket={ticket} />
          <div className={styles.badgeWrapper}>
            <span className={styles.subtitle}>Başvuru kodu:</span>
            <Badge className={styles.badge} onClick={() => copyToClipboard(ticket.ticketCode)}>
              {ticket.ticketCode}
              {!copied ? (
                <Copy className={styles.badgeIcon} />
              ) : (
                <Check className={styles.badgeIcon} />
              )}
            </Badge>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div>
            <Button onClick={handlePrint} size="icon" variant="outline">
              <Printer />
            </Button>
          </div>
          <div>
            <Link to={`/basvuru/${ticket.ticketCode}`}>Başvuru durumunu sorgula</Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
