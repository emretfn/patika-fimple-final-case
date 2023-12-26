import styles from "./AdminTicketListPage.module.css";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs/Tabs";

export default function AdminTicketListPage() {
  return (
    <main className="container">
      <Tabs defaultValue="unsolved" className={styles.tabs}>
        <TabsList className={styles.tabsList}>
          <TabsTrigger value="unsolved">Çözülmemiş Başvurular</TabsTrigger>
          <TabsTrigger value="all">Tüm Başvurular</TabsTrigger>
        </TabsList>
        <TabsContent value="unsolved" className={styles.tabsContent}>
          Tabs 1
        </TabsContent>
        <TabsContent value="all" className={styles.tabsContent}>
          Tabs 2
        </TabsContent>
      </Tabs>
    </main>
  );
}
