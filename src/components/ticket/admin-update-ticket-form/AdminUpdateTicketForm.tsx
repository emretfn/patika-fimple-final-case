import FormField from "@/components/form-field/FormField";
import styles from "./AdminUpdateTicketForm.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";
import Textarea from "@/components/ui/Textarea/Textarea";
import Button from "@/components/ui/Button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AdminUpdateTicketType,
  adminUpdateTicketSchema,
} from "@/lib/validations/admin-update-ticket-schema";
import { Ticket } from "@/types";
import { useAppDispatch } from "@/store";
import { useEffect } from "react";
import api from "@/lib/api";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { updateTicket } from "@/store/ticket/ticketSlice";

interface AdminUpdateTicketFormProps {
  ticket: Ticket | null;
}

export default function AdminUpdateTicketForm({ ticket }: AdminUpdateTicketFormProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdminUpdateTicketType>({
    defaultValues: {
      status: "WAITING",
      response: "",
    },
    resolver: yupResolver(adminUpdateTicketSchema),
  });

  useEffect(() => {
    if (ticket) {
      reset({
        status: ticket.status,
        response: ticket.response,
      });
    }
  }, [ticket, reset]);

  const handleUpdate: SubmitHandler<AdminUpdateTicketType> = async (formData) => {
    if (ticket) {
      try {
        const { data } = await api.put(`/tickets/${ticket.id}`, formData);
        dispatch(updateTicket(data));
        toast.success("Başvuru güncellendi.");
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)} className={styles.ticketUpdateForm}>
      <FormField label="Başvuru Durumu" htmlFor="status" error={errors.status?.message}>
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value} name={field.name}>
              <SelectTrigger ref={field.ref} id="status">
                <SelectValue placeholder="Bir durum seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WAITING">Bekliyor</SelectItem>
                <SelectItem value="SOLVED">Çözüldü</SelectItem>
                <SelectItem value="CANCELLED">İptal Edildi</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </FormField>
      <FormField label="Başvuru Notu" htmlFor="response" error={errors.response?.message}>
        <Textarea id="response" {...register("response")} />
      </FormField>
      <Button loading={isSubmitting} type="submit">
        Güncelle
      </Button>
    </form>
  );
}
