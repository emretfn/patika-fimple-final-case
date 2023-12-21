import Input from "@/components/ui/Input/Input";
import styles from "./CreateTicketForm.module.css";
import Textarea from "@/components/ui/Textarea/Textarea";
import Button from "@/components/ui/Button/Button";
import FormField from "@/components/form-field/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateTicketType, createTicketSchema } from "@/lib/validations/create-ticket-schema";
import { mockUpload } from "@/lib/helpers/mockUpload";
import api from "@/lib/api";
import { useNavigate } from "react-router-dom";

export default function CreateTicketForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateTicketType>({
    resolver: yupResolver(createTicketSchema),
  });

  const createTicket: SubmitHandler<CreateTicketType> = async (formData) => {
    try {
      const { attachments, ...rest } = formData;
      let attachmentsUrls: string[] = [];

      // Check if there are any attachments and upload them
      if (attachments && attachments.length > 0) {
        attachmentsUrls = await mockUpload(attachments as FileList);
      }

      // Send the ticket data to the server
      const dataToSend = {
        ...rest,
        attachments: attachmentsUrls,
      };

      const { data } = await api.post("/tickets", dataToSend);
      console.log("data", data);
      navigate(`/basvuru-basarili?ticketCode=${data.ticketCode}`);
    } catch (error) {
      // TODO ADD TOASTER
      console.log("error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(createTicket)} className={styles.form}>
      <div className={styles.col2}>
        <FormField htmlFor="userName" label="Adınız" error={errors.userName?.message}>
          <Input id="userName" {...register("userName")} />
        </FormField>
        <FormField htmlFor="userSurname" label="Soyadınız" error={errors.userSurname?.message}>
          <Input id="userSurname" {...register("userSurname")} />
        </FormField>
        <FormField htmlFor="userAge" label="Yaşınız" error={errors.userAge?.message}>
          <Input id="userAge" type="number" {...register("userAge")} />
        </FormField>
        <FormField htmlFor="userTc" label="TC Kimlik Numaranız" error={errors.userTc?.message}>
          <Input id="userTc" {...register("userTc")} />
        </FormField>
      </div>
      <FormField htmlFor="reason" label="Başvuru Nedeni" error={errors.reason?.message}>
        <Textarea id="reason" {...register("reason")} />
      </FormField>
      <FormField htmlFor="address" label="Adres Bilgisi" error={errors.address?.message}>
        <Textarea id="address" {...register("address")} />
      </FormField>
      <FormField
        htmlFor="attachments"
        label="Fotoğraflar/Ekler"
        error={errors.attachments?.message}
      >
        <Input type="file" id="attachments" multiple {...register("attachments")} />
      </FormField>
      <Button disabled={isSubmitting} type="submit">
        Gönder
      </Button>
    </form>
  );
}
