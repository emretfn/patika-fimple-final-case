import { Loader2 } from "lucide-react";
import styles from "./Spinner.module.css";
import clsx from "clsx";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Spinner = ({ size = 24, className, ...props }: SpinnerProps) => {
  return (
    <div className={clsx(styles.spinnerContainer, className)} {...props}>
      <Loader2 className={styles.spinner} width={size} height={size} />
    </div>
  );
};

export default Spinner;
