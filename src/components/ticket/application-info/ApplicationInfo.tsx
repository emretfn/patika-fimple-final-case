import { Ticket } from "@/types";
import styles from "./ApplicationInfo.module.css";
import { getUserFullname } from "@/lib/helpers/getUserFullname";

interface ApplicantInfoProps {
  ticket: Ticket;
}

export default function ApplicationInfo({ ticket }: ApplicantInfoProps) {
  return (
    <div className={styles.applicationInfo}>
      <p>
        <b>Ad Soyad:</b> {getUserFullname(ticket.userName, ticket.userSurname)}
      </p>
      <p>
        <b>Yaş:</b> {ticket.userAge}
      </p>
      <p>
        <b>TC:</b> {ticket.userTc}
      </p>
      <p>
        <b>Adres:</b> {ticket.address}
      </p>
      <p>
        <b>Başvuru nedeni:</b> {ticket.reason}
      </p>
      {!!ticket.attachments?.length && (
        <div className={styles.uploadedFiles}>
          <p>Yüklenen Dosyalar:</p>
          <div className={styles.fileLinks}>
            {ticket.attachments.map((fileUrl, index) => (
              <a href={fileUrl} key={fileUrl} target="_blank">
                Dosya {index + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
