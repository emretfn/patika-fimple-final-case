import FormField from "@/components/form-field/FormField";
import styles from "./InquiryTicketForm.module.css";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";

import { SubmitHandler, useForm } from "react-hook-form";
import { InquiryTicketType, inquiryTicketSchema } from "@/lib/validations/inquiry-ticket-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function InquiryTicketForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryTicketType>({
    resolver: yupResolver(inquiryTicketSchema),
  });

  const onSubmit: SubmitHandler<InquiryTicketType> = (data) => {
    navigate(`/basvuru/${data.ticketCode}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Başvuru Kodu" htmlFor="ticketCode" error={errors.ticketCode?.message}>
        <Input id="ticketCode" placeholder="Başvuru kodunuzu giriniz" {...register("ticketCode")} />
      </FormField>
      <Button disabled={isSubmitting} type="submit">
        Sorgula
      </Button>
    </form>
  );
}
