import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ htmlFor, label, children, error }: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={htmlFor} aria-label={label}>
        {label}
      </label>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default FormField;
