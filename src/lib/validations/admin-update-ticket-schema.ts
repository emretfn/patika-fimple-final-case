import { TicketStatus } from "@/types";
import * as yup from "yup";

const StatusTypes: TicketStatus[] = ["WAITING", "SOLVED", "CANCELLED"];

export const adminUpdateTicketSchema = yup.object().shape({
  status: yup.string().oneOf(StatusTypes, "Geçerli bir durum seçiniz.").required("Durum zorunlu"),
  response: yup.string().optional(),
});

export type AdminUpdateTicketType = yup.InferType<typeof adminUpdateTicketSchema>;
