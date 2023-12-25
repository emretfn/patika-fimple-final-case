import { TicketStatus } from "@/types";

export const getStatusText = (status: TicketStatus | undefined) => {
  switch (status) {
    case "WAITING":
      return "Bekliyor";
    case "SOLVED":
      return "Çözüldü";
    case "CANCELLED":
      return "İptal Edildi";
    default:
      return "Bilinmeyen Durum";
  }
};
