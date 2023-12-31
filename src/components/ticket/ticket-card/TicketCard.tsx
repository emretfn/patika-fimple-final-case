import { Card, CardContent, CardHeader } from "@/components/card/Card";
import styles from "./TicketCard.module.css";
import { Ticket } from "@/types";
import Badge from "@/components/ui/Badge/Badge";
import { getStatusText } from "@/lib/helpers/getStatusText";
import Button from "@/components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { getTicketStatusVariant } from "@/lib/helpers/getTicketStatusVariant";
import { getUserFullname } from "@/lib/helpers/getUserFullname";

interface TicketCardProps {
  ticket: Ticket;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  const navigate = useNavigate();
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <span>Başvuru #{ticket.ticketCode}</span>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <p>Başvuran: {getUserFullname(ticket.userName, ticket.userSurname)}</p>
        <p>Başvuru Tarihi: {new Date(ticket.createdAt).toLocaleDateString()}</p>
        <Badge variant={getTicketStatusVariant(ticket.status)} className={styles.badge}>
          {getStatusText(ticket.status)}
        </Badge>
        <Button
          className={styles.button}
          onClick={() => navigate(`/admin/basvuru/${ticket.ticketCode}`)}
        >
          Başvuruyu Görüntüle
        </Button>
      </CardContent>
    </Card>
  );
}
