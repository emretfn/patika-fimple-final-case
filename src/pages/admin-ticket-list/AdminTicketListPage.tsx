import { useDispatch } from "react-redux";
import styles from "./AdminTicketListPage.module.css";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs/Tabs";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { fetchTickets } from "@/store/ticket/ticketThunk";
import { useTicketStore } from "@/store/ticket/hooks";
import TicketCardList from "@/components/ticket/ticket-card-list/TicketCardList";
import Spinner from "@/components/ui/Spinner/Spinner";
import EmptyState from "@/components/empty-state/EmptyState";

export default function AdminTicketListPage() {
  const [activeTab, setActiveTab] = useState<"unsolved" | "all">("unsolved");
  const dispatch = useDispatch<AppDispatch>();
  const { loading, tickets } = useTicketStore();

  useEffect(() => {
    dispatch(fetchTickets(activeTab));
  }, [activeTab, dispatch]);

  const handleTabChange = (value: string) => {
    setActiveTab(value as "unsolved" | "all");
  };

  return (
    <main className="container">
      <Tabs value={activeTab} onValueChange={handleTabChange} className={styles.tabs}>
        <TabsList className={styles.tabsList}>
          <TabsTrigger value="unsolved">Çözülmemiş Başvurular</TabsTrigger>
          <TabsTrigger value="all">Tüm Başvurular</TabsTrigger>
        </TabsList>
        <div className={styles.tabsContent}>
          {loading ? (
            <Spinner asOverlay />
          ) : tickets.length > 0 ? (
            <TicketCardList tickets={tickets} />
          ) : (
            <EmptyState
              description={
                activeTab === "unsolved" ? "Çözülmemiş başvuru bulunamadı." : "Başvuru bulunamadı."
              }
            />
          )}
        </div>
      </Tabs>
    </main>
  );
}
