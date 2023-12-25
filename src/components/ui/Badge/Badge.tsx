import { VariantProps, cva } from "class-variance-authority";
import styles from "./Badge.module.css";
import clsx from "clsx";

const badgeVariants = cva(styles.badgeContainer, {
  variants: {
    variant: {
      default: styles.default,
      success: styles.success,
      error: styles.error,
      warning: styles.warning,
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export default function Badge({ children, variant, className, ...props }: BadgeProps) {
  return (
    <div className={clsx(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
