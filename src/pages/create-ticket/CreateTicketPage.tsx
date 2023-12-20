import CreateTicketForm from "@/components/ticket/create-ticket-form/CreateTicketForm";
import styles from "./CreateTicketPage.module.css";

export default function CreateTicketPage() {
  return (
    <main className="container">
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Bilet Oluştur 🎫</h2>
        <CreateTicketForm />
      </div>
    </main>
  );
}
