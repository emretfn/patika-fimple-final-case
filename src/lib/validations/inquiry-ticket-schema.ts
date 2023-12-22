import * as yup from "yup";

export const inquiryTicketSchema = yup.object().shape({
  ticketCode: yup
    .string()
    .required("Başvuru kodu zorunlu")
    .min(10, "Başvuru kodu 10 haneli olmalıdır")
    .max(10, "Başvuru kodu 10 haneli olmalıdır"),
});

export type InquiryTicketType = yup.InferType<typeof inquiryTicketSchema>;
