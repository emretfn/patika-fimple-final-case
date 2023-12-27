import { TicketStatus } from "@/types";

export const getTicketStatusVariant = (status: TicketStatus | undefined) => {
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
