import { Navigate } from "react-router-dom";
import ApplicationSuccessCard from "@/components/ticket/application-success-card/ApplicationSuccessCard";
import { useTicket } from "@/store/ticket/useTicket";

const ApplicationSuccessPage = () => {
  const ticket = useTicket();

  if (!ticket) {
    return <Navigate to={"/basvuru-olustur"} />;
  }

  return (
    <main className="container">
      <ApplicationSuccessCard ticket={ticket} />
    </main>
  );
};

export default ApplicationSuccessPage;
