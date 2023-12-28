import clsx from "clsx";
import styles from "./PageBanner.module.css";

interface PageBannerProps {
  title: string;
  description: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <div className={styles.pageBanner}>
      <div className={clsx(styles.pageCaption, "container")}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
