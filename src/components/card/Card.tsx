import styles from "./Card.module.css";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <p className={clsx(styles.cardHeader, className)} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={clsx(styles.cardContent, className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent };
