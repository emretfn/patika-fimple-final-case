import styles from "./AdminTicketDetailPage.module.css";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import PageBanner from "@/components/page-banner/PageBanner";
import AdminUpdateTicketForm from "@/components/ticket/admin-update-ticket-form/AdminUpdateTicketForm";
import Spinner from "@/components/ui/Spinner/Spinner";
import { AppDispatch } from "@/store";
import { useTicketStore } from "@/store/ticket/hooks";
import { fetchTicketByCode } from "@/store/ticket/ticketThunk";
import clsx from "clsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function AdminTicketDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { ticketCode } = useParams();
  const { ticket, error, loading } = useTicketStore();

  useEffect(() => {
    if (ticketCode) {
      dispatch(fetchTicketByCode(ticketCode));
    }
  }, [ticketCode, dispatch]);

  if (error && !ticket) {
    throw new Error("404 Bulunamadı.");
  }

  if (loading) {
    return <Spinner asOverlay />;
  }

  return (
    <main>
      <PageBanner title={`Başvuru #${ticket?.ticketCode}`} description="" />
      <div className={clsx("container", styles.pageContainer)}>
        <Card>
          <CardHeader>Başvuran Bilgisi</CardHeader>
          <CardContent className={styles.applicantCardContent}>
            <div className={styles.userDetail}>
              <h5 className={styles.userName}>
                {ticket?.userName} {ticket?.userSurname}
              </h5>
              <p>Yaş: {ticket?.userAge}</p>
              <p>TC: {ticket?.userTc}</p>
            </div>
            <div className={styles.applicationInfo}>
              <p>
                <b>Adres:</b> {ticket?.address}
              </p>
              <p>
                <b>Başvuru nedeni:</b> {ticket?.reason}
              </p>
            </div>
            {!!ticket?.attachments?.length && (
              <div className={styles.uploadedFiles}>
                <h6>Yüklenen Dosyalar</h6>
                {ticket.attachments.map((fileUrl) => (
                  <a href={fileUrl} key={fileUrl} target="_blank">
                    File 1
                  </a>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Başvuruyu güncelle</CardHeader>
          <CardContent>
            <AdminUpdateTicketForm ticket={ticket} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default AdminTicketDetailPage;
