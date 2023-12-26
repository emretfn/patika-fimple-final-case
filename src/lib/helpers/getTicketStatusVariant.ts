import { TicketStatus } from "@/types";

export const getTicketStatusVariant = (status: TicketStatus) => {
  switch (status) {
    case "WAITING":
      return "warning";
    case "CANCELLED":
      return "error";
    case "SOLVED":
      return "success";
    default:
      return "default";
  }
};
