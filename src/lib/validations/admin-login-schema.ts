import * as yup from "yup";

export const adminLoginSchema = yup.object().shape({
  username: yup.string().required("Kullanıcı adı zorunlu"),
  password: yup.string().required("Şifre zorunlu"),
});

export type AdminLoginType = yup.InferType<typeof adminLoginSchema>;
