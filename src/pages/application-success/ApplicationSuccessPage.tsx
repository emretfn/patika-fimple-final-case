import { useSearchParams, Navigate } from "react-router-dom";
import ApplicationSuccessCard from "@/components/ticket/application-success-card/ApplicationSuccessCard";

const ApplicationSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const ticketCode = searchParams.get("ticketCode");
  if (!ticketCode) {
    return <Navigate to={"/basvuru-olustur"} />;
  }

  return (
    <main className="container">
      <ApplicationSuccessCard />
    </main>
  );
};

export default ApplicationSuccessPage;
