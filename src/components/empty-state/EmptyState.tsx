import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  description: string;
}

export default function EmptyState({ description }: EmptyStateProps) {
  return (
    <div className={styles.emptyState}>
      <img src="/empty-state.svg" alt="Empty State Illustration" />
      <p>{description}</p>
    </div>
  );
}
