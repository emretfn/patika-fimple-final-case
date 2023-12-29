import styles from "./AdminTicketDetailPage.module.css";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import PageBanner from "@/components/page-banner/PageBanner";
import AdminUpdateTicketForm from "@/components/ticket/admin-update-ticket-form/AdminUpdateTicketForm";
import ApplicationInfo from "@/components/ticket/application-info/ApplicationInfo";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppDispatch } from "@/store";
import { useTicketStore } from "@/store/ticket/hooks";
import { fetchTicketByCode } from "@/store/ticket/ticketThunk";
import clsx from "clsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AdminTicketDetailPage() {
  const dispatch = useAppDispatch();
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
      <PageBanner title={`Başvuru #${ticket?.ticketCode}`} />
      <div className={clsx("container", styles.pageContainer)}>
        {!!ticket && (
          <Card>
            <CardHeader>Başvuran Bilgisi</CardHeader>
            <CardContent className={styles.applicantCardContent}>
              <ApplicationInfo ticket={ticket} />
            </CardContent>
          </Card>
        )}
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
