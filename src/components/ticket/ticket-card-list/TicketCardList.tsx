import styles from "./TicketCardList.module.css";
import TicketCard from "../ticket-card/TicketCard";
import { Ticket } from "@/types";

interface TicketCardListProps {
  tickets: Ticket[];
}

export default function TicketCardList({ tickets }: TicketCardListProps) {
  return (
    <div className={styles.cardList}>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
