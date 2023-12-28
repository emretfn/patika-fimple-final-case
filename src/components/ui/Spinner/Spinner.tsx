import { Loader2 } from "lucide-react";
import styles from "./Spinner.module.css";
import clsx from "clsx";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  asOverlay?: boolean;
}

const Spinner = ({ size = 24, className, asOverlay = false, ...props }: SpinnerProps) => {
  const componentClass = clsx(
    styles.spinnerContainer,
    asOverlay && styles.spinnerOverlay,
    className
  );

  return (
    <div className={componentClass} {...props}>
      <Loader2 className={styles.spinner} width={size} height={size} />
    </div>
  );
};

export default Spinner;
