import PageBanner from "@/components/page-banner/PageBanner";
import styles from "./TicketDetailPage.module.css";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import clsx from "clsx";
import { useEffect } from "react";
import { fetchTicketByCode } from "@/store/ticket/ticketThunk";
import { useParams } from "react-router-dom";
import { useTicketStore } from "@/store/ticket/hooks";
import { useAppDispatch } from "@/store";
import Spinner from "@/components/ui/Spinner/Spinner";
import ApplicationInfo from "@/components/ticket/application-info/ApplicationInfo";
import ApplicationStatusInfo from "@/components/ticket/application-status-info/ApplicationStatusInfo";

function TicketDetailPage() {
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
    <main className={styles.main}>
      <PageBanner
        title="Başvuru Detayları"
        description="Aşağıdaki alandan başvuru detaylarınızı ve durumunu kontrol edebilirsiniz."
      />
      <div className={clsx("container", styles.container)}>
        {!!ticket && (
          <>
            <Card className={styles.cardContainer}>
              <CardHeader className={styles.cardTitle}>Başvuran Detayları</CardHeader>
              <CardContent className={styles.contentWrapper}>
                <ApplicationInfo ticket={ticket} />
              </CardContent>
            </Card>
            <Card className={styles.cardContainer}>
              <CardHeader>Başvuru Durumu</CardHeader>
              <CardContent className={styles.contentWrapper}>
                <ApplicationStatusInfo ticket={ticket} />
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </main>
  );
}

export default TicketDetailPage;
