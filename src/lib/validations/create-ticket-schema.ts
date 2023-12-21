import * as yup from "yup";

export const createTicketSchema = yup.object().shape({
  userName: yup.string().required("Ad kısmı zorunlu"),
  userSurname: yup.string().required("Soyad kısmı zorunlu"),
  userAge: yup
    .number()
    .required("Yaş kısmı zorunlu")
    .transform((value) => (isNaN(value) ? undefined : value)),
  userTc: yup
    .string()
    .required("Tc kısmı zorunlu")
    .min(11, "Tc 11 haneli olmalıdır")
    .matches(/^[1-9]{1}[0-9]{9}[02468]{1}$/, "Geçerli bir tc giriniz"),
  reason: yup.string().required("Başvuru nedeni kısmı zorunlu"),
  address: yup.string().required("Adres kısmı zorunlu"),
  attachments: yup
    .mixed<FileList>()
    .test("is-filelist", "Dosyalar geçerli değil", (value) => {
      return value instanceof FileList;
    })
    .optional(),
});

// change attachments type to FileList
export type CreateTicketType = yup.InferType<typeof createTicketSchema>;
