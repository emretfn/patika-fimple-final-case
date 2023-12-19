import { forwardRef } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <textarea ref={ref} className={styles.textarea} {...props} />;
});

export default Textarea;
