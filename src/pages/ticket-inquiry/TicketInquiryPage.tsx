import PageBanner from "@/components/page-banner/PageBanner";
import styles from "./TicketInquiryPage.module.css";

import InquiryTicketForm from "@/components/ticket/inquiry-ticket-form/InquiryTicketForm";
export default function TicketInquiryPage() {
  return (
    <main>
      <PageBanner
        title="Başvuru Sorgula"
        description="Başvuru detaylarını sorgulamak için lütfen başvuru kodunuzu giriniz."
      />
      <div className={`container ${styles.formSection}`}>
        <InquiryTicketForm />
      </div>
    </main>
  );
}
