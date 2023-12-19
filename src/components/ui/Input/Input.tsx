import { forwardRef } from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, ...props }, ref) => {
  return <input ref={ref} type={type} className={styles.input} {...props} />;
});

export default Input;
