import { VariantProps, cva } from "class-variance-authority";
import styles from "./Button.module.css";
import { forwardRef } from "react";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.default,
      outline: styles.outline,
    },
    size: {
      default: styles["size-default"],
      small: styles["size-small"],
      large: styles["size-large"],
      icon: styles["size-icon"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant, size }, ref) => {
  return (
    <button ref={ref} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
});

export default Button;
