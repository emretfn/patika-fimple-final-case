import * as yup from "yup";

export const adminLoginSchema = yup.object().shape({
  username: yup.string().required("Kullanıcı adı zorunlu"),
  password: yup.string().required("Şifre zorunlu").min(6, "Şifre en az 6 karakter olmalı"),
});

export type AdminLoginType = yup.InferType<typeof adminLoginSchema>;
