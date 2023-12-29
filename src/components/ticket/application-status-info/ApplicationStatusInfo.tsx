import styles from "./ApplicationStatusInfo.module.css";
import { Ticket } from "@/types";
import Badge from "@/components/ui/Badge/Badge";
import { getTicketStatusVariant } from "@/lib/helpers/getTicketStatusVariant";
import { getStatusText } from "@/lib/helpers/getStatusText";

interface ApplicationStatusInfoProps {
  ticket: Ticket;
}

export default function ApplicationStatusInfo({ ticket }: ApplicationStatusInfoProps) {
  return (
    <div className={styles.applicationStatusInfo}>
      <div>
        <b>Başvuru kodu:</b> {ticket.ticketCode}
      </div>
      <div>
        <b>Durumu: </b>
        <Badge variant={getTicketStatusVariant(ticket.status)}>
          {getStatusText(ticket.status)}
        </Badge>
      </div>
      {ticket.response && (
        <div>
          <b>Cevap:</b> {ticket.response}
        </div>
      )}
    </div>
  );
}
