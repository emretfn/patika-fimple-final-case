import CreateTicketForm from "@/components/ticket/create-ticket-form/CreateTicketForm";
import styles from "./CreateTicketPage.module.css";
import PageBanner from "@/components/page-banner/PageBanner";

export default function CreateTicketPage() {
  return (
    <main>
      <PageBanner
        title="Başvuru Oluştur"
        description="Destek talebinizi oluşturmak ve bize iletmek için lütfen aşağıdaki formu doldurun."
      />
      <div className="container">
        <div className={styles.formWrapper}>
          <CreateTicketForm />
        </div>
      </div>
    </main>
  );
}
