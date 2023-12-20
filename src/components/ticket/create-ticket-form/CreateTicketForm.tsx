import Input from "@/components/ui/Input/Input";
import styles from "./CreateTicketForm.module.css";
import Textarea from "@/components/ui/Textarea/Textarea";
import Button from "@/components/ui/Button/Button";
import FormField from "@/components/form-field/FormField";

export default function CreateTicketForm() {
  return (
    <form className={styles.form}>
      <div className={styles.col2}>
        <FormField htmlFor="name" label="Adınız">
          <Input id="name" name="name" />
        </FormField>
        <FormField htmlFor="surname" label="Soyadınız">
          <Input id="surname" name="surname" />
        </FormField>
        <FormField htmlFor="age" label="Yaşınız">
          <Input id="age" name="age" />
        </FormField>
        <FormField htmlFor="tc" label="TC Kimlik Numaranız">
          <Input id="tc" name="tc" />
        </FormField>
      </div>
      <FormField htmlFor="reason" label="Başvuru Nedeni">
        <Textarea id="reason" name="reason" />
      </FormField>
      <FormField htmlFor="address" label="Adres Bilgisi">
        <Textarea id="address" name="address" />
      </FormField>
      <FormField htmlFor="attachments" label="Fotoğraflar/Ekler">
        <Input type="file" id="attachments" name="attachments" />
      </FormField>
      <Button type="submit">Gönder</Button>
    </form>
  );
}
