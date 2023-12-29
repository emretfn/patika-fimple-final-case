import PageBanner from "@/components/page-banner/PageBanner";
import styles from "./TicketDetailPage.module.css";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import clsx from "clsx";
import Badge from "@/components/ui/Badge/Badge";
import { useEffect } from "react";
import { fetchTicketByCode } from "@/store/ticket/ticketThunk";
import { useParams } from "react-router-dom";
import { useTicketStore } from "@/store/ticket/hooks";
import { useAppDispatch } from "@/store";
import { getStatusText } from "@/lib/helpers/getStatusText";
import Spinner from "@/components/ui/Spinner/Spinner";
import { getTicketStatusVariant } from "@/lib/helpers/getTicketStatusVariant";
import ApplicationInfo from "@/components/ticket/application-info/ApplicationInfo";

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
          <Card className={styles.cardContainer}>
            <CardHeader className={styles.cardTitle}>Başvuran Detayları</CardHeader>
            <CardContent className={styles.contentWrapper}>
              <ApplicationInfo ticket={ticket} />
            </CardContent>
          </Card>
        )}
        <Card className={styles.cardContainer}>
          <CardHeader>Başvuru Durumu</CardHeader>
          <CardContent className={styles.contentWrapper}>
            <div>
              <h5 className={styles.infoTitle}>Başvuru kodu:</h5>
              <p>{ticket?.ticketCode}</p>
            </div>
            <div>
              <h5 className={styles.infoTitle}>Durumu:</h5>
              <Badge variant={getTicketStatusVariant(ticket?.status)}>
                {getStatusText(ticket?.status)}
              </Badge>
            </div>
            {ticket?.response && (
              <div>
                <h5 className={styles.infoTitle}>Cevap:</h5>
                <p>{ticket.response}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default TicketDetailPage;
