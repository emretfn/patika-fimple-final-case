import FormField from "@/components/form-field/FormField";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import styles from "./AdminLoginForm.module.css";
import { AdminLoginType, adminLoginSchema } from "@/lib/validations/admin-login-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { login } from "@/store/auth/authThunk";
import { useAuth } from "@/store/auth/hooks";
import { useNavigate } from "react-router-dom";

export default function AdminLoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginType>({
    resolver: yupResolver(adminLoginSchema),
  });

  const onLogin: SubmitHandler<AdminLoginType> = async (data) => {
    dispatch(login(data))
      .unwrap()
      .then(() => {
        navigate("/admin/basvuru-listesi");
      })
      .catch((err) => {
        // TODO: add error handling
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className={styles.formWrapper}>
      <FormField label="Kullanıcı adı" htmlFor="username" error={errors.username?.message}>
        <Input id="username" {...register("username")} />
      </FormField>
      <FormField label="Şifre" htmlFor="password" error={errors.password?.message}>
        <Input type="password" id="password" {...register("password")} />
      </FormField>
      <Button loading={loading}>Giriş yap</Button>
    </form>
  );
}
