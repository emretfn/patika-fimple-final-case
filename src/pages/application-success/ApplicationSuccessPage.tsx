import { Navigate } from "react-router-dom";
import ApplicationSuccessCard from "@/components/ticket/application-success-card/ApplicationSuccessCard";
import { useTicket } from "@/store/ticket/useTicket";
import PageBanner from "@/components/page-banner/PageBanner";

const ApplicationSuccessPage = () => {
  const ticket = useTicket();

  if (!ticket) {
    return <Navigate to={"/basvuru-olustur"} />;
  }

  return (
    <main>
      <PageBanner
        title="Başvurunuz başarıyla alındı!"
        description="Destek ekibimizle iletişime geçtiğiniz için teşekkür ederiz. Biletinizi başarıyla aldık ve ekibimiz en kısa sürede size geri dönecektir."
      />
      <div className="container">
        <ApplicationSuccessCard ticket={ticket} />
      </div>
    </main>
  );
};

export default ApplicationSuccessPage;
