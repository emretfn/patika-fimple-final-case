import { useSearchParams, Navigate } from "react-router-dom";
import ApplicationSuccessCard from "@/components/ticket/application-success-card/ApplicationSuccessCard";

const ApplicationSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const ticketId = searchParams.get("ticketId");
  if (!ticketId) {
    return <Navigate to={"/basvuru-olustur"} />;
  }

  return (
    <main className="container">
      <ApplicationSuccessCard />
    </main>
  );
};

export default ApplicationSuccessPage;
