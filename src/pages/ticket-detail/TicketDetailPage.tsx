import PageBanner from "@/components/page-banner/PageBanner";
import styles from "./TicketDetailPage.module.css";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import clsx from "clsx";
import Badge from "@/components/ui/Badge/Badge";
import { useEffect } from "react";
import { fetchTicketByCode } from "@/store/ticket/ticketThunk";
import { useParams } from "react-router-dom";
import { useTicketStore } from "@/store/ticket/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { getStatusText } from "@/lib/helpers/getStatusText";
import Spinner from "@/components/ui/Spinner/Spinner";

function TicketDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { ticketCode } = useParams();
  const { ticket, error, loading } = useTicketStore();

  useEffect(() => {
    if (error) {
      throw new Error("404 Bulunamadı.");
    }
  }, [error]);

  useEffect(() => {
    if (ticketCode) {
      dispatch(fetchTicketByCode(ticketCode));
    }
  }, [ticketCode, dispatch]);

  return (
    <main className={styles.main}>
      <PageBanner
        title="Başvuru Detayları"
        description="Aşağıdaki alandan başvuru detaylarınızı ve durumunu kontrol edebilirsiniz."
      />
      <div className={clsx("container", styles.container)}>
        <Card className={styles.cardContainer}>
          <CardHeader className={styles.cardTitle}>Başvuran Detayları</CardHeader>
          {loading ? (
            <Spinner />
          ) : (
            <CardContent className={styles.contentWrapper}>
              <div>
                <h5 className={styles.infoTitle}>
                  {ticket?.userName} {ticket?.userSurname}
                </h5>
                <p>
                  Yaş: {ticket?.userAge} <br />
                  TC: {ticket?.userTc} <br />
                </p>
              </div>
              <div>
                <h5 className={styles.infoTitle}>Adres:</h5>
                <p>{ticket?.address}</p>
              </div>
              <div>
                <h5 className={styles.infoTitle}>Başvuru Sebebi:</h5>
                <p>{ticket?.reason}</p>
              </div>
            </CardContent>
          )}
        </Card>
        <Card className={styles.cardContainer}>
          <CardHeader>Başvuru Durumu</CardHeader>
          {loading ? (
            <Spinner />
          ) : (
            <CardContent className={styles.contentWrapper}>
              <div>
                <h5 className={styles.infoTitle}>Başvuru kodu:</h5>
                <p>{ticket?.ticketCode}</p>
              </div>
              <div>
                <h5 className={styles.infoTitle}>Durumu:</h5>
                <Badge variant="warning">{getStatusText(ticket?.status)}</Badge>
              </div>
              {ticket?.response && (
                <div>
                  <h5 className={styles.infoTitle}>Cevap:</h5>
                  <p>{ticket.response}</p>
                </div>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </main>
  );
}

export default TicketDetailPage;
